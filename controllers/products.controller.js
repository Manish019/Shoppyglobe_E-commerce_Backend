import productModel from "../models/Products.model.js";
import axios from "axios";

// create Product using POST()
export async function createProducts(req, res) {
  try {
    const product = await productModel.findById(req.params.id);

    if (!product) {
      console.log(product, "product Id");
      
     // return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ product });
  } catch (err) {
    return res.status(500).json({ error: err.message, message: "Server error" });
  }
}



// Fetch Product using Get()

export async function fetchProducts(req,res){
    try{
        const data = await productModel.find();
        // console.log(data , "data");
        // console.log(req.user , "req.user");
        return res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json({error: err.message})
    }
}


// add product
export async function addProduct(req,res){
    try {
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data.products;
    // res.status(200).json(products);
    // console.log("show all data",products);
    

    // Map DummyJSON data to match your schema
    const formattedProducts = products.map((item) => ({
      title: item.title,
      description: item.description,
      price: item.price,
      quantity: item.stock || 0,
    }));

    // Insert all products at once
    const inserted = await productModel.insertMany(formattedProducts);

    res.status(201).json({
      message: "Products inserted successfully",
      insertedCount: inserted.length,
      data: inserted,
    });
  } catch (err) {
    console.error("Error inserting products:", err.message);
    res.status(500).json({ message: "Insertion failed", error: err.message });
  }
}
