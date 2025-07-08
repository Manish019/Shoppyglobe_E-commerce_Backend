import {  cartProduct, deleteCart, updateQuantity } from "../controllers/carts.controller.js"; 
import { verifyToken } from "../middleware/varifyToken.js";



// export cart routes with authentication middleware verify is medileware check jwt token
    export function cartRoutes(app) {

    // app.post("cart", addToCart); 
   
    app.post("/api/addcart",verifyToken,cartProduct)
     app.put("/api/cart", verifyToken, updateQuantity);
    app.delete("/api/cart", verifyToken, deleteCart);
}