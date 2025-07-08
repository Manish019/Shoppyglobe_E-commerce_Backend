import { addProduct, createProducts, fetchProducts } from "../controllers/products.controller.js"; 
// import { verifyToken } from "../middleware/varifyToken.js";


// import all user controller 

// routes path
export function productRoutes(app) {

    app.get('/api/products', fetchProducts) ,
    app.post('/api/products', addProduct) ,
    app.get('/api/products/:id' , createProducts) 
   
}