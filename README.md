# Event Management System (Backend)

This is a beginner-level Event Management System backend project built with Typescript, Node.js, Express, Prisma, and SQLite.  
The project focuses on backend development concepts including user authentication, role-based access control, and CRUD operations for events and registrations.

---

## Features

- **User Model** with secure password hashing and roles (admin, user)  
- **Event Model** supporting create, read, update, and delete (CRUD) operations — only admins can create/update/delete events  
- **Registration Model** to track which users are registered for which events  
- **Authentication** via email and password (login/register)  
- **Role-Based Access Control** to restrict admin-only operations  
- **RESTful API** endpoints for users, events, registrations, and authentication  
- Tested and working with Postman

---

## Tech Stack

- Typescript
- Node.js  
- Express.js  
- Prisma ORM with SQLite database  
- EJS templating only  
- bcrypt for password hashing  
- dotenv for environment variables  

---

## Getting Started

### Prerequisites

- Node.js (v14 or newer recommended)  
- npm or yarn  

### Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/yourusername/event-management-backend.git
   cd event-management-backend

2. npm install

3. npm install prisma --save-dev
   npx prisma init
   npm install @prisma/client

4. .env:
   DATABASE_URL="file:./dev.db"
   PORT=3000
   JWT_SECRET=your_jwt_secret_here

5. npx prisma migrate dev --name init
   npx prisma generate

6. npm run dev



