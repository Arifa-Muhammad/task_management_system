# Task Management System

A full-stack Task Management System built with React, Node.js, Express, and MongoDB. This application helps users manage their tasks through a simple interface with authentication and task management functionality.

## ✨ Features

- **User Authentication** — Register and log in to your account.
- **Task Management** — Create, view, update, and delete tasks.
- **Secure Password Handling** — Passwords are hashed using bcryptjs.
- **JWT Authentication** — JSON Web Tokens for authentication.
- **RESTful API** — Organized API endpoints for authentication and tasks.
- **Responsive Frontend** — Built with React and Vite.
- **API Integration** — Axios for communication between the frontend and backend.
- **Error Handling** — Centralized backend error-handling middleware.

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- React Icons
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Express Validator
- CORS
- dotenv

## 📁 Project Structure

```text
Task_Management_system/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── Server/                 # Express backend
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

*Note: The exact folder and file structure may vary depending on your repository.*

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [MongoDB](https://www.mongodb.com/) or a MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Arifa-Muhammad/task_management_system.git
```

Navigate to the project directory:

```bash
cd task_management_system
```

### 2. Set Up the Backend

Open a terminal and navigate to the backend folder:

```bash
cd Server
npm install
```

Create a `.env` file inside the `Server` directory and add the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_secret_key
```

Replace the placeholder values with your own configuration.

Start the backend:

```bash
npm start
```

For development with automatic restarts:

```bash
npm run dev
```

The backend will run on `http://localhost:5000`, provided the port is available and the database connection succeeds.

### 3. Set Up the Frontend

Open another terminal from the project root:

```bash
cd client
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

**Important:** Ensure the frontend API configuration points to the backend URL. For local development, the current API base URL is:

```text
http://localhost:5000/api
```

## 🔌 API Endpoints

The backend currently mounts the following API routes:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check whether the backend is running |
| `/` | `/api/auth` | Authentication route group |
| `/` | `/api/tasks` | Task management route group |

The authentication and task route groups contain the individual endpoints defined in their respective route files.

## 🔐 Environment Variables

Keep all secrets in environment variables.

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key used for JWT signing |

**Security note:** Never commit your `.env` file, database credentials, or JWT secrets to GitHub.

## 🚀 Deployment

The project can be deployed using:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

Deployment configuration and production environment variables must be set before the live application can be accessed.

## 🎯 Project Objective

This project was developed to practice full-stack web development, REST API design, database integration, authentication, and connecting a React frontend to an Express backend.

## 👩‍💻 Author

**Arifa Muhammad**

- GitHub: [Arifa-Muhammad](https://github.com/Arifa-Muhammad)

---

⭐ If you find this project useful, consider giving the repository a star!
