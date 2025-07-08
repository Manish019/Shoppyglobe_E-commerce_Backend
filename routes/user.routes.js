import { userLogin, userRegister } from "../controllers/user.controller.js"; 
// import all user controller 

// routes path
export function userRoutes(app) {
    app.post("/api/register", userRegister);
    app.post("/api/login", userLogin);
}