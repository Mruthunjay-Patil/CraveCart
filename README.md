# 🍔 CraveCart — Food Delivery Platform

> **Craving Delivered.**

CraveCart is a full-stack food delivery web application built using the **MERN Stack**. It provides a complete online food ordering experience with customer authentication, shopping cart, Stripe test payments, order management, email confirmations, and a dedicated admin panel.

---

## 🌐 Project Overview

CraveCart consists of three major applications:

- 👤 Customer Panel
- 🛠️ Admin Panel
- ⚙️ Backend REST API

The platform allows customers to browse food items, add products to their cart, place orders, make secure test payments through Stripe, and receive order confirmation emails.

Administrators can manage food products, view orders, and update order statuses.

---

## ✨ Features

### 👤 Customer Panel

- User Registration & Login
- JWT Authentication
- Password Hashing with Bcrypt
- Browse Food Items
- Food Category Filtering
- Search Food
- Add Food to Cart
- Update Cart Quantity
- Remove Food from Cart
- Delivery Information
- Order Placement
- Stripe Test Payment
- Order Verification
- My Orders
- Order Status Tracking
- Logout
- Toast Notifications

### 🛠️ Admin Panel

- Admin Login
- Role-Based Authentication
- Add Food Items
- Remove Food Items
- View All Food Items
- View Customer Orders
- Update Order Status
- Admin Logout
- Protected Admin APIs

### 📧 Email System

CraveCart uses **Nodemailer** to send professional order confirmation emails.

Customers receive:

- Order confirmation
- Customer name
- Order ID
- Ordered food items
- Quantity
- Price
- Total amount
- Estimated delivery time

### 💳 Payment

Stripe Test Mode is integrated for payment processing.

The project supports:

- Stripe Checkout
- Test Payments
- Payment Verification
- Successful Payment Handling
- Cancelled Payment Handling

> ⚠️ Stripe is currently configured for **test mode**.

---

## 🧰 Tech Stack

### Frontend

- React.js
- React Router
- Axios
- CSS
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Multer
- Nodemailer
- Stripe

### Database

- MongoDB Atlas

### Services

- Stripe
- Gmail / Nodemailer
- Cloudinary
- Render

---

## 🏗️ Project Structure

```text
CraveCart/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── index.html
│
├── admin/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── index.html
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── templates/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── logo.png
└── README.md
