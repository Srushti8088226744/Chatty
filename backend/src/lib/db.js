import mongoose from "mongoose";
import dns from "node:dns";

// Ensure reliable DNS resolution for MongoDB Atlas SRV records on Windows
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (e) {
  // fallback silently if custom DNS setting fails
}

const MAX_RETRIES = 5;
const RETRY_DELAY = 3000; // 3 seconds

const connectWithRetry = async (retries = MAX_RETRIES) => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error("❌ MONGODB_URI is not defined in environment variables");
      return null;
    }

    console.log(`🔄 Attempting MongoDB connection... (attempt ${MAX_RETRIES - retries + 1}/${MAX_RETRIES})`);

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000, // Timeout after 10s
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
    });
    
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`⚠️ Connection attempt failed: ${error.message}`);

    if (error.message.includes("authentication failed") || error.message.includes("AuthenticationFailed")) {
      console.error("👉 FIX: Your username or password is wrong. Go to MongoDB Atlas → Database Access → Edit user and reset the password.");
    } else if (error.message.includes("getaddrinfo") || error.message.includes("querySrv") || error.message.includes("ENOTFOUND")) {
      console.error("👉 FIX: DNS resolution failed. Check your internet connection and MONGODB_URI hostname.");
    } else if (error.message.includes("connect ETIMEDOUT") || error.message.includes("Server selection timed out")) {
      console.error("👉 FIX: Connection timed out. Your IP is probably NOT whitelisted.");
      console.error("   Go to MongoDB Atlas → Network Access → Add IP Address → Allow Access from Anywhere (0.0.0.0/0)");
    }

    if (retries > 1) {
      console.log(`   Retrying in ${RETRY_DELAY / 1000}s...`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return connectWithRetry(retries - 1);
    } else {
      console.error("❌ MongoDB connection failed after all retries.");
      console.error("   Checklist:");
      console.error("   1. Is your IP whitelisted? Atlas → Network Access → Add 0.0.0.0/0");
      console.error("   2. Is the username/password correct? Atlas → Database Access");
      console.error("   3. Is your internet working?");
      // Don't throw - let the server continue running
      return null;
    }
  }
};

export const connectDB = async () => {
  return await connectWithRetry();
};
