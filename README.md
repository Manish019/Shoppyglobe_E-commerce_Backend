# 🛒 ShoppyGlobe E-commerce Backend

A RESTful API for the ShoppyGlobe E-commerce application, built with **Node.js**, **Express.js**, and **MongoDB**. It enables full backend functionality for an online shopping experience, including product management, shopping cart operations, and user authentication.

---

## 🚀 Features

- ✅ Product listing and details
- ✅ Add, update, or delete products
- ✅ Shopping cart management
- ✅ Stock validation
- ✅ User registration & login
- ✅ Password hashing with bcrypt
- ✅ JWT-based authentication

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcrypt
- **Tools:** Nodemon, Postman/Thunder Client

---

## 📁 Project Structure
📦shoppyglobe-backend
┣ 📂controllers
┣ 📂routes
┣ 📂models
┣ 📜.gitignore
┣ 📜package.json
┣ 📜server.js

## ⚙️ Installation
npm install

📦 API Endpoints
🧾 Products
GET /api/products
Fetch all products from the database.

GET /api/products/:id
Fetch a single product by ID.


🛒 Cart
POST /api/cart
Add a product to the cart. If already exists, updates quantity. Stock is validated.

--** PUT /api/cart
Update quantity of an item in the cart. If it’s not in the cart, it will be added.

--** DELETE /api/cart
Remove a product from the cart using productId.

👤 Authentication
POST /api/register
Register a new user (name, email, password). Password is hashed before saving.

POST /api/login
Authenticate a user and return a JWT token.

🛡️ Security
Passwords are hashed with bcrypt
JWT is used for authentication
Input data is validated and sanitized

🔗 Project Repository
👉 **Live Repository:** [GitHub Link](https://github.com/your-username/shoppyglobe-backend)



