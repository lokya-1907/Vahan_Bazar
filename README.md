# 🏍️ Vahan Bazar – Full Stack Bike Marketplace
Vehicle Marketplace | React, Node.js, MongoDB

---

## Problem Statement

Buying and selling vehicles online is often scattered across different platforms, with limited trust, poor user experience, and no real-time interaction. Many existing solutions lack transparency, modern UI, and secure communication between buyers and sellers.

There is a need for a dedicated marketplace where users can:

Post vehicles for sale 📝

Browse/filter/search listings 🔎

Chat with sellers instantly 💬

Enjoy a smooth, secure, and responsive experience

Vaahan Bazaar solves this by combining a React frontend with a Node.js + Express backend, a MongoDB database, and Socket.io for real-time updates.

Detailed Proposal & Features

Frontend: React + TypeScript + Tailwind CSS for styling

Backend: Node.js + Express for APIs

Database: MongoDB with Mongoose ORM

Authentication: JWT-based secure login

Communication: Socket.io for real-time messaging

---

## Features Implemented:

Vehicle listing creation & browsing

Filters (by price, type, brand)

Responsive, modern UI

User login/signup

Secure chat between buyers and sellers

Cloud-hosted database with fast queries

---

## 🚀 Tech Stack

| Layer       | Technology                        |
|------------|----------------------------------|
| Frontend   | React, TypeScript, Tailwind CSS  |
| Backend    | Node.js, Express, Sequelize       |
| Database   | PostgreSQL / MySQL               |
| Auth       | JWT, Protected Routes             |
| Styling    | Tailwind CSS, PostCSS             |
| State Mgmt | Context API, Custom Hooks         |

---

## 🧱 Project Structure
```
vahan-bazar/
│
├── frontend/ # React + TypeScript + Tailwind CSS
│ ├── public/ # Static assets
│ │ ├── index.html
│ │ └── favicon.ico
│ │
│ ├── src/
│ │ ├── assets/ # Images, icons, logos
│ │ ├── components/ # Reusable UI components
│ │ ├── contexts/ # Global state (e.g., AuthContext)
│ │ ├── hooks/ # Custom React hooks
│ │ ├── pages/ # Route-level views
│ │ ├── utils/ # Utility functions (e.g., api.ts)
│ │ ├── App.tsx # Main app component with routing
│ │ ├── index.tsx # Entry point
│ │ ├── index.css # Global styles
│ │ └── theme.js # Theme variables (optional)
│ │
│ ├── package.json
│ └── README.md
│
├── backend/ # Node.js + Express + Sequelize
│ ├── config/ # DB config and environment setup
│ ├── controllers/ # Business logic for each route
│ ├── middleware/ # Auth, error handling, etc.
│ ├── migrations/ # Sequelize migration files
│ ├── models/ # Sequelize models
│ ├── routes/ # API endpoints
│ ├── seeders/ # Initial data population
│ ├── utils/ # Helper functions
│ ├── app.js # Express app setup
│ ├── server.js # Server entry point
│ ├── .env # Environment variables
│ ├── package.json
│ └── README.md
│
└── README.md
```
---

## 🌟 Key Features

- 🔍 **Browse Bikes:** Filter by brand, fuel type, price, and more.  
- ⚖️ **Compare Bikes:** Side-by-side spec comparison.  
- 🛵 **Used Bikes Marketplace:** Verified listings with location and price.  
- 🏢 **Showroom Locator:** Map-based search with booking options.  
- 📅 **Upcoming Launches:** Timeline of future bike models.  
- ❤️ **Favorites:** Save and track preferred bikes.  
- 🔐 **Authentication:** Role-based access for users and dealers.  
- 💸 **Finance Tools:** EMI calculator and booking management.  

---
## Team Contributions 

#### Lokya Lochana (Lead – Backend & Integration)

Designed & implemented backend APIs (Express + JWT)

Integrated Socket.io for real-time messaging

Coordinated project structure & flow

#### Sri Hari Krishna (Frontend Developer)

Built React pages & components

Implemented filtering, navigation, and state management

Integrated Tailwind CSS for styling

#### Tanmai (UI/UX Designer)

Designed wireframes in Figma

Ensured responsive layouts & intuitive navigation

Styled mobile and desktop interfaces

#### Saloni (Database Developer)

Modeled MongoDB schemas for users, vehicles, chats

Indexed queries for faster search

Setup MongoDB Atlas for hosting

#### Nayana (Frontend & Demo Specialist)

Worked on UI polish and animations

Helped optimize frontend performance

Led final app demo and GitHub setup

---


## 📦 Installation

### Frontend
```bash
cd frontend
npm install
npm run dev
```
### Backend
```bash
cd backend
npm install
npm run dev
```

### 🔐 Environment Variables
Create a .env file in the backend folder with:
```
DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
JWT_SECRET=your_jwt_secret
```

### 📌 Future Enhancements
Dealer dashboard with analytics

Admin panel for content moderation

Payment gateway integration

Push notifications for launches and offers

### Credits ✨

#### Code Maverics

Lokya Lochana (Lead – Backend & Integration)

Sri Hari Krishna (Frontend)

Tanmai (UI/UX)

Saloni (Database)

Nayana (Frontend & Demo)

---

"Buy Smart, Sell Easy with Vaahan Bazaar 🚗"
