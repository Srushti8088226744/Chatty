# Chatty — Real-Time Chatting Application

**Project Documentation & Setup Guide**

Chatty is a feature-rich **Real-Time Chatting Application** developed using the **MERN Stack**. The application provides real-time one-to-one and group communication along with authentication, online status, typing indicators, file sharing, reminders, themes, mood analysis, focus mode, and interactive features.

---

## 📋 Table of Contents

1. Project Overview
2. Key Features
3. Technology Stack
4. Project Folder Structure
5. Required Software
6. First-Time Setup
7. Daily Quick Start
8. Exact Terminal Commands & Launch Order
9. Environment Configuration
10. Backend Architecture
11. Frontend Architecture
12. Real-Time Communication
13. Database
14. API Routes
15. Port Configuration
16. Application Workflow
17. System Health Checks
18. Troubleshooting
19. Shutdown Procedure
20. Restart Procedure
21. Production Build
22. Future Enhancements
23. Project Objective

---

# 1. Project Overview

**Chatty** is a web-based real-time communication platform developed using the **MERN Stack**.

The application allows registered users to communicate through **one-to-one chats and group chats**. Real-time communication is implemented using **Socket.IO**, allowing messages, typing status, and online status to be updated without continuously refreshing the page.

The project also includes several additional features such as:

* User authentication
* One-to-one messaging
* Group messaging
* Online/offline status
* Typing indicator
* Read receipts
* File and image sharing
* User profiles
* Chat reminders
* Notifications
* Multiple themes
* Auto-delete messages
* Mood/emotion analysis
* Automatic emoji suggestions
* Focus mode
* Typing speed game
* Quiz battle

---

# 2. Key Features

## 🔐 User Authentication

Users can:

* Register a new account
* Login
* Logout
* Update their profile
* Check authentication status

Authentication and protected routes are used to prevent unauthorized access.

## 💬 One-to-One Chat

Users can select another registered user and communicate through a private conversation.

Messages are stored in the database and can be retrieved when the user opens the conversation again.

## 👥 Group Chat

Users can communicate with multiple users through group conversations.

Group-related operations are handled through dedicated backend routes and controllers.

## ⚡ Real-Time Messaging

**Socket.IO** is used to provide real-time communication.

When a user sends a message, the receiver can receive it without manually refreshing the page.

## 🟢 Online/Offline Status

The application maintains online user information using Socket.IO.

Users can also filter their contacts to show only currently online users.

## ✍️ Typing Indicator

When a user starts typing, the other user can see a typing indication.

This is implemented using Socket.IO typing events.

## ✓ Read Receipts

The application supports message read status so that users can know whether messages have been viewed.

## 📁 File and Image Sharing

Users can share files and images through the chat interface.

## ⏰ Chat Reminders

Users can type reminder-related messages such as:

> I will meet you at 5:47

The application can identify the reminder and provide a confirmation/notification.

## 🎨 Themes

Chatty provides multiple interface themes that allow users to customize the appearance of the application.

## 🗑️ Auto-Delete Messages

Messages can be configured for automatic deletion after a specified period.

## 😊 Mood & Emotion Features

The application includes mood-related chat functionality.

It provides features such as:

* Searching messages by emotion
* Filtering chats by mood
* Emotion statistics
* Automatic emoji-related features

## 🎯 Focus Mode

Focus Mode allows selected contacts to be hidden temporarily so that the user can concentrate without receiving distracting messages from those contacts.

## 🎮 Interactive Features

Chatty also includes interactive features such as:

* Typing speed game
* Quiz battle

These features make the application more engaging beyond normal messaging.

---

# 3. Technology Stack

## Frontend

* React.js
* Vite
* JavaScript
* HTML
* CSS
* DaisyUI-style themes

## Backend

* Node.js
* Express.js
* Socket.IO

## Database

* MongoDB
* Mongoose

## Development Tools

* Visual Studio Code
* Git
* GitHub
* npm

---

# 4. Project Folder Structure

The main project is organized into two major parts:

```text
Chatty/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── lib/
│   │   └── socket.js
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── stores/
│   │   └── ...
│   └── ...
│
├── .gitignore
├── LICENSE
├── package.json
└── package-lock.json
```

> Note: The exact number of files and folders may change as the project is developed further.

---

# 5. Required Software

Before running Chatty, install:

* **Node.js**
* **npm**
* **MongoDB Atlas account/database**
* **Git**
* **Visual Studio Code**

Node.js is required for running both the frontend development environment and the backend JavaScript server.

MongoDB is used to store users, messages, groups, and other application data.

---

# 6. First-Time Setup

Follow these steps when setting up Chatty on a new computer.

## Step 1 — Clone the Repository

```bash
git clone https://github.com/Srushti8088226744/Chatty.git
```

Move into the project directory:

```bash
cd Chatty
```

## Step 2 — Install Dependencies

Install the required npm packages:

```bash
npm install
```

If frontend and backend have separate `package.json` files, install dependencies inside their respective folders:

```bash
cd backend
npm install
```

Then:

```bash
cd ../frontend
npm install
```

## Step 3 — Configure Environment Variables

Create a `.env` file inside the backend folder.

Example:

```text
MONGODB_URI=your_mongodb_connection_string
PORT=5001
```

Replace the MongoDB connection string with your own MongoDB Atlas connection string.

**Do not upload `.env` to GitHub.**

---

# 7. Daily Quick Start

For returning users, start the backend and frontend.

## Terminal 1 — Backend

Open PowerShell in the backend directory:

```bash
cd backend
npm start
```

The backend server will start on the configured port.

## Terminal 2 — Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Vite will display the local frontend URL in the terminal, normally similar to:

```text
http://localhost:5173/
```

Open that URL in the browser.

---

# 8. Exact Terminal Commands & Launch Order

The basic application workflow is:

```text
                 MongoDB Atlas
                      │
                      ▼
              ┌──────────────┐
              │    Backend   │
              │ Node/Express │
              └──────┬───────┘
                     │
             Socket.IO / API
                     │
                     ▼
              ┌──────────────┐
              │   Frontend   │
              │ React + Vite │
              └──────────────┘
                     │
                     ▼
                  Browser
```

### Start Backend

```bash
cd backend
npm start
```

### Start Frontend

Open a second terminal:

```bash
cd frontend
npm run dev
```

---

# 9. Environment Configuration

The backend uses environment variables for sensitive configuration.

Example:

```text
MONGODB_URI=your_mongodb_uri
PORT=5001
```

The `.env` file should remain local.

The project `.gitignore` should contain:

```text
.env
node_modules/
```

This prevents sensitive information and installed dependencies from being uploaded to GitHub.

---

# 10. Backend Architecture

The backend follows a modular structure.

### Routes

The application contains routes for different functionalities, including:

```text
auth
message
group
feedback
reminder
theme
game
focusMode
```

### Controllers

Controllers contain the application logic for handling requests.

### Models

Mongoose models are used to define and interact with MongoDB data.

### Middleware

Middleware is used for tasks such as authentication and protecting routes.

### Protected Routes

The `protectRoute` middleware is used to ensure that only authenticated users can access protected functionality.

---

# 11. Frontend Architecture

The frontend is developed using **React and Vite**.

Important frontend state management includes:

```text
useAuthStore
useChatStore
```

### Authentication Store

`useAuthStore` manages authentication-related information such as:

* Login
* Signup
* Logout
* User information
* Authentication status

### Chat Store

`useChatStore` manages chat-related functionality such as:

* Users
* Messages
* Conversations
* Sending messages
* Receiving messages

---

# 12. Real-Time Communication

Chatty uses **Socket.IO** for real-time communication.

The socket implementation maintains a mapping of online users and their socket connections.

The application supports real-time events such as:

```text
New Message
Typing
Stop Typing
Online Status
Message Updates
```

This allows the application to behave like a real-time messaging platform.

---

# 13. Database

Chatty uses **MongoDB** as its database.

MongoDB stores application information such as:

* User accounts
* User profiles
* Messages
* Groups
* Chat information
* Reminders
* Other application data

**Mongoose** is used to connect the Node.js backend with MongoDB and manage database models.

---

# 14. API Routes

The backend is organized into feature-based API routes.

Major route categories include:

| Route      | Purpose                                        |
| ---------- | ---------------------------------------------- |
| Auth       | Registration, login, logout and authentication |
| Message    | Sending and retrieving messages                |
| Group      | Group chat management                          |
| Feedback   | User feedback                                  |
| Reminder   | Chat reminders                                 |
| Theme      | Theme preferences                              |
| Game       | Interactive games                              |
| Focus Mode | Focus mode functionality                       |

Protected routes use authentication middleware to prevent unauthorized access.

---

# 15. Port Configuration

The application uses separate ports for frontend and backend.

| Service              |   Typical Port |
| -------------------- | -------------: |
| React/Vite Frontend  |           5173 |
| Node/Express Backend |           5001 |
| MongoDB Atlas        | Cloud Database |

The exact backend port is controlled through the backend `.env` configuration.

---

# 16. Application Workflow

The general application workflow is:

```text
User
 │
 ▼
Register / Login
 │
 ▼
Authentication
 │
 ▼
Chat Dashboard
 │
 ├── Select User
 │       │
 │       ▼
 │   One-to-One Chat
 │
 └── Select Group
         │
         ▼
      Group Chat
         │
         ▼
     Socket.IO
         │
         ▼
 Real-Time Communication
         │
         ▼
      MongoDB
```

---

# 17. System Health Checks

After starting the application, verify:

### Backend

Check the backend terminal for a successful server startup message.

### Frontend

Open the URL displayed by Vite, for example:

```text
http://localhost:5173/
```

### Database

Check that the backend successfully connects to MongoDB.

If the database connection fails, check:

* MongoDB URI
* Internet connection
* MongoDB Atlas configuration
* Database user credentials
* Network access settings

---

# 18. Troubleshooting

## 1. `npm` is not recognized

Check whether Node.js is installed:

```bash
node -v
```

Then:

```bash
npm -v
```

If these commands do not work, install Node.js and restart the terminal.

## 2. MongoDB Connection Error

Check the `.env` file:

```text
MONGODB_URI=your_mongodb_connection_string
```

Make sure the connection string is correct.

Also check MongoDB Atlas network access.

## 3. Port Already in Use

If the backend port is already being used, stop the previous backend process or change the port in `.env`.

## 4. Frontend Does Not Start

Try:

```bash
npm install
npm run dev
```

If the problem continues, remove `node_modules` and reinstall dependencies.

## 5. Messages Are Not Real-Time

Check:

* Backend is running
* Socket.IO server is running
* Frontend is connected to the correct backend
* CORS configuration is correct
* Both users are logged in

---

# 19. Shutdown Procedure

To stop the application:

### Frontend

In the frontend terminal:

```text
CTRL + C
```

### Backend

In the backend terminal:

```text
CTRL + C
```

---

# 20. Restart Procedure

After making code changes:

### Terminal 1

```bash
cd backend
npm start
```

### Terminal 2

```bash
cd frontend
npm run dev
```

Then open the URL displayed by Vite.

---

# 21. Production Build

To create an optimized frontend build:

```bash
npm run build
```

The production files are generated in the configured build directory.

For deployment, the frontend and backend need to be hosted appropriately, and the production frontend must communicate with the deployed backend and database.

---

# 22. Future Enhancements

Possible future improvements include:

* Voice calling
* Video calling
* Push notifications
* Advanced message search
* Improved security
* Better media management
* Cloud deployment
* Mobile application
* Enhanced AI-based conversation analysis

---

# 23. Project Objective

The main objective of **Chatty** is to develop a complete real-time communication platform using modern full-stack technologies.

The project provides practical experience with:

* Frontend development
* Backend development
* REST APIs
* MongoDB
* Authentication
* Socket.IO
* Real-time communication
* State management
* Git and GitHub
* Full-stack application development

---

## 👩‍💻 Author

**Srushti Halingali**

Engineering Student
Interests: AI, Full Stack Development & Cybersecurity

---


