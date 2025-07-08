# 🛒 ShoppyGlobe E-commerce Backend

The ShoppyGlobe E-commerce Backend is a RESTful API system built using Node.js, Express.js, and MongoDB. It powers the backend operations of an e-commerce platform, offering features like product listing, cart management, user registration, and secure login. Designed for scalability and simplicity, this API provides developers with clean endpoints, robust validation, and MongoDB integration using Mongoose.
This project showcases how a modern backend system can handle business logic, database communication, and user sessions for an online shopping platform.

1. Product Management
Users or administrators can retrieve all products or view a specific product by its ID. Each product includes attributes such as title, description, price, and quantity. These APIs allow the front end to dynamically display available items and detailed product views. Products are fetched directly from a MongoDB database using Mongoose ORM, ensuring fast and secure data handling.

GET /products: Fetch all products.

GET /products/:id: Fetch product by ID.

2. Cart Functionality
The cart system allows users to manage products they intend to purchase. Users can add products to the cart, update the quantity, or remove items entirely. The logic ensures that the quantity being added or updated never exceeds the available stock, thus maintaining inventory integrity.

POST /cart: Adds a product to the cart or updates quantity if it already exists.

PUT /cart: Directly updates the quantity of a product in the cart.

DELETE /cart: Removes a product from the cart using productId.

Each cart operation includes error handling to account for invalid product IDs, out-of-stock items, or missing data.

3. User Registration and Authentication
The backend provides secure user registration and login functionality. New users can register by providing their name, email, and password. Passwords are hashed using bcrypt before storing them in the database, enhancing security. During login, user credentials are verified, and a JWT token is generated for session handling.

POST /register: Registers a new user after checking for existing accounts.

POST /login: Logs in a user and returns a JWT token if authentication succeeds.

JWT tokens can be used to protect future routes like orders, profiles, or admin panels.

4. Error Handling & Middleware
The project uses middleware for JSON parsing, logging, and error management. All API responses are structured with clear messages and status codes, making them easy to consume on the frontend or in debugging tools like Postman.

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
https://github.com/your-username/shoppyglobe-backend


👉 **Live Repository:** [GitHub Link](https://github.com/your-username/shoppyglobe-backend)

👨‍💻 Developed By
Manish Kumar

