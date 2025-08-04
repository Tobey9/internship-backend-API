# Internship Backend API

A simple backend REST API for managing users (Admins, Interns, Volunteers) built with **Node.js**, **Express**, **Sequelize**, and **MySQL**.

## 🔧 Tech Stack

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- JWT Authentication
- express-validator

## 📦 Features

- User registration & login
- Password hashing with bcrypt
- JWT-based authentication with cookies
- Role-based access control (Admin, Intern, Volunteer)
- View only interns and volunteers
- Secure logout
- Environment variable management with `.env`

## 📁 Folder Structure

```
├── config/ # DB config
├── controllers/ # Route handlers
├── middlewares/ # Custom middleware (auth, validation, etc.)
├── models/ # Sequelize models
├── routes/ # Express routes
├── utils/ # Utility helpers like catchAsync
├── validators/ # express-validator logic
├── .env # Environment variables
├── .gitignore
├── index.js # Server entry
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/internship-backend-API.git
cd internship-backend-API
```

### 3. Install dependencies

```bash
npm install
```

### 3. Set up `.env`

```env
PORT=3000
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASS=your_db_password
DB_HOST=localhost
JWT_SECRET=yourSecretKey
NODE_ENV=development
```

### 4. Run the server

```bash
npm run dev
```

## 🔐 Protected Routes

- `GET /api/auth` — Admin only

- `POST /api/auth/register` — Public

- `POST /api/auth/login` — Public

- `POST /api/auth/logout` — Authenticated users

## 🧪 Validation

All input is validated using `express-validator`.
