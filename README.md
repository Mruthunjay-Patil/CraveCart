CraveCart -- Food Delivery Platform

CraveCart is a full-stack food delivery web application built using the
MERN stack. It provides a customer-facing food ordering experience along
with an admin dashboard for managing food items and orders.

Live Website

Frontend: https://cravecart-frontend-mhtm.onrender.com

GitHub Repository: https://github.com/Mruthunjay-Patil/CraveCart

Features

User registration and login

JWT-based authentication

Food browsing and filtering

Shopping cart management

Online order placement

Stripe Checkout payment integration

Order verification after payment

Admin dashboard

Food/product management

Customer order management

REST API integration

MongoDB database

Responsive React interface

Tech Stack

React.js

Node.js

Express.js

MongoDB

JWT

Stripe

Axios

Git & GitHub

Render

Project Structure

CraveCart/
├── frontend/
├── admin/
├── backend/
├── logo.png
└── README.md

Run Locally

Frontend

cd frontend
npm install
npm run dev

Admin

cd admin
npm install
npm run dev

Backend

cd backend
npm install
npm start

Environment Variables

Create a .env file inside the backend folder and add your own
credentials:

PORT=3000
MONGO_URL=YOUR_MONGODB_URL
JWT_SECRET=YOUR_JWT_SECRET
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY

Do not commit .env files or API secrets to GitHub.

Deployment

The application is deployed using Render.

Frontend: https://cravecart-frontend-mhtm.onrender.com

Backend: https://cravecart-backend-yo8v.onrender.com
