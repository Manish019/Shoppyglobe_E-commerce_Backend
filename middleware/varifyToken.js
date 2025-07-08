import  jwt from 'jsonwebtoken';
import UserModel from '../models/User.model.js';

// Function to verify JWT token
 export function verifyToken( req,res,next) {
  
  if (
    req.headers && 
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT" )
  {
      jwt.verify(
        req.headers.authorization.split(" ")[1], 'secretKey',
         (err, verifiedToken) => {
          
             if (err) {
                      return res.status(403).json({ message: "Unauthorized access Token" });
                 }

               //console.log("verifiedToken", verifiedToken);

               UserModel.findById(verifiedToken.id)
               .then((user)=>{
                    console.log(user,"user");
                    next()
                })
                .catch((err)=> res.status(500).json({message:err.message}))
                
            });
   }


 }

