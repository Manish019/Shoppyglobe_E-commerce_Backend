import express from "express";
const app = express(); // Entire express application
import mongoose from "mongoose";
import { userRoutes } from "./routes/user.routes.js";
import { productRoutes } from "./routes/products.routes.js";
import { cartRoutes } from "./routes/carts.routes.js";
import cors from 'cors';

// Connect to MongoDB using Mongoose

mongoose.connect("mongodb+srv://arayanmanish:UwtZzyXc5VEwlCDY@cluster0.uxym8fp.mongodb.net/")

  //arayanmanish
  //UwtZzyXc5VEwlCDY

  .then(() => {
    console.log("DB CONNECTED SUCCESSFULLY");
  })
  .catch((err) => {
    console.log("DB NOT CONNECTED", err);
  });

// route or routes

app.get("/", (req, res) => {
  res.send("Welcome to the Shoppyglobe E-commerce");
});



app.use(cors());

app.use(express.json()) // for parsing application/json
// Importing user routes
productRoutes(app);
userRoutes(app);
cartRoutes(app);

const PORT = 5051;
app.listen(PORT, () => {
  console.log(`server is running at port : ${PORT}`);
});
