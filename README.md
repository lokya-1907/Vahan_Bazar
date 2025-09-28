🏍️ Vahan Bazar – Full Stack Bike Marketplace
Vahan Bazar is a modern, full-stack web application that allows users to buy, sell, compare, and explore bikes. It features a sleek dark-themed UI, dynamic filters, and robust backend APIs—designed for scalability and performance.

🚀 Tech Stack
Layer	Technology
Frontend	React, TypeScript, Tailwind CSS
Backend	Node.js, Express, Sequelize
Database	PostgreSQL / MySQL
Auth	JWT, Protected Routes
Styling	Tailwind CSS, PostCSS
State Mgmt	Context API, Custom Hooks

🧱 Project Structure
Curban-bazar/
│
├── frontend/                         # React + TypeScript + Tailwind CSS
│   ├── public/                       # Static assets
│   │   ├── index.html
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── assets/                   # Images, icons, logos
│   │   ├── components/              # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProtectedRoute.tsx
│   │   │   └── ...
│   │   ├── contexts/                # Global state (e.g. AuthContext)
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── pages/                   # Route-level views
│   │   │   ├── Home.tsx
│   │   │   ├── Bikes.tsx
│   │   │   ├── BikeDetail.tsx
│   │   │   ├── UsedBikes.tsx
│   │   │   ├── Showrooms.tsx
│   │   │   ├── Compare.tsx
│   │   │   ├── Finance.tsx
│   │   │   ├── Upcoming.tsx
│   │   │   ├── Favorites.tsx
│   │   │   ├── Bookings.tsx
│   │   │   ├── DealerDashboard.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── ...
│   │   ├── utils/                   # Utility functions
│   │   │   └── api.ts               # API service layer
│   │   ├── App.tsx                  # Main app component with routing
│   │   ├── App.css                  # Component-level styles
│   │   ├── index.tsx                # Entry point
│   │   ├── index.css                # Global styles
│   │   └── theme.js                 # Theme variables (optional)
│   │
│   ├── package.json
│   ├── postcss.config.js
│   └── README.md
│
├── backend/                          # Node.js + Express + Sequelize
│   ├── config/                       # DB config and environment setup
│   │   ├── config.json
│   │   └── database.js
│   ├── controllers/                 # Business logic for each route
│   ├── middleware/                  # Auth, error handling, etc.
│   ├── migrations/                  # Sequelize migration files
│   ├── models/                      # Sequelize models
│   ├── routes/                      # API endpoints
│   │   ├── alerts.js
│   │   ├── auth.js
│   │   ├── bikes.js
│   │   ├── bookings.js
│   │   ├── compare.js
│   │   ├── dealers.js
│   │   ├── finance.js
│   │   ├── reviews.js
│   │   ├── showrooms.js
│   │   ├── upcoming.js
│   │   ├── usedBikes.js
│   │   └── users.js
│   ├── seeders/                     # Initial data population
│   ├── utils/                       # Helper functions
│   ├── app.js                       # Express app setup
│   ├── server.js                    # Server entry point
│   ├── .env                         # Environment variables
│   ├── env.local                    # Local environment overrides
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
└── README.md                        # Root-level documentation

🌟 Key Features
🔍 Browse Bikes: Filter by brand, fuel type, price, and more

⚖️ Compare Bikes: Side-by-side spec comparison

🛵 Used Bikes Marketplace: Verified listings with location and price

🏢 Showroom Locator: Map-based search with booking options

📅 Upcoming Launches: Timeline of future bike models

❤️ Favorites: Save and track preferred bikes

🔐 Authentication: Role-based access for users and dealers

💸 Finance Tools: EMI calculator and booking management

📦 Installation
bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
npm install
npm run dev

🔐 Environment Variables
Create a .env file in the backend with:

DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
JWT_SECRET=your_jwt_secret

📌 Future Enhancements
Dealer dashboard with analytics

Admin panel for content moderation

Payment gateway integration

Push notifications for launches and offers
