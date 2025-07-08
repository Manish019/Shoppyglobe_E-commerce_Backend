import cartModel from "../models/Carts.model.js";
import productModel from "../models/Products.model.js";
import mongoose from "mongoose";

// POST /cart → Add product to cart
export async function cartProduct(req,res){
  //console.log("cartProduct");
  try {
    const { productId, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const availableStock = product.quantity || 0;
    const requestedQty = quantity || 1;

    // Check if already in cart
    const inCart = await cartModel.findOne({ productId });

    const currentQtyInCart = inCart ? inCart.quantity : 0;
    const totalQtyAfterAdd = currentQtyInCart + requestedQty;

    // Stock check
    if (totalQtyAfterAdd > availableStock) {
      return res.status(400).json({ message: "Out of stock" });
    }

    if (!inCart) {
      await cartModel.create({ productId, quantity: requestedQty });
      return res.status(200).json({ message: "Product added to cart" });
    }

    await cartModel.updateOne(
      { productId },
      { $inc: { quantity: requestedQty } }
    );

    res.status(201).json({ message: "Product Quantity added to cart" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

//}
//}


// PUT /cart → Update quantity of product in cart
export async function updateQuantity(req, res) {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Valid productId is required" });
    }

    if (typeof quantity !== "number" || quantity <= 0) {
      return res.status(400).json({ message: "Quantity must be a positive number" });
    }

    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (quantity > product.quantity) {
      return res.status(400).json({ message: "Requested quantity exceeds available stock" });
    }

    const inCart = await cartModel.findOne({ productId });
    if (!inCart) {
      return res.status(404).json({ message: "Product not in cart" });
    }

    await cartModel.updateOne({ productId }, { $set: { quantity } });

    return res.status(200).json({ message: `Cart updated: quantity set to ${quantity}` });
  } catch (err) {
    console.error("Update error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
}


// DELETE /cart → Remove a product from cart
export async function deleteCart(req, res) {
  try {
    const { productId } = req.body;

    if (!productId || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Valid productId is required" });
    }

    const deleted = await cartModel.findOneAndDelete({ productId });

    if (!deleted) {
      return res.status(404).json({ message: "Product is not available in the cart" });
    }

    return res.status(200).json({ message: "Product removed from cart" });
  } catch (err) {
    console.error("Delete error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
}
  