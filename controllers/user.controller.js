import UserModel from "../models/User.model.js"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export async function userRegister(req, res) {
  try{

     let { fullName, email, password } = req.body;

  // Check if the user already exists
  if (await UserModel.findOne({ email })) {
    return res.status(400).json({ message: "User already exists" });
  }
  else {
    let newpassword = bcrypt.hashSync(password, 10); // Hash the password with a salt rounds of 10
    let newUser = await UserModel.create({ fullName,email,password:newpassword });
    //console.log(newUser);
   res.status(201).json({ message: "User registered successfully", user: newUser });
    
  }
  
  }
   catch(err){
       return  res.status(500).json({ message: "Error fetching data", error: err.message });
   }

};



// Login user

  export async function userLogin(req,res) {
   try{
     let {email,password} = req.body;
       const data = await UserModel.findOne({email});
// Check if the user exists
// If the user does not exist, return an error message
         if(!data){
        return  res.status(400).json({ message: "User is not Registered"});
      }

      // Check if the password is valid
      // Use bcrypt to compare the provided password with the hashed password in the database
      let validPassword = bcrypt.compareSync(password, data.password);
            if(!validPassword){
                return res.status(404).json({message: "Invalid password"})
            }
            // This is a more secure way to create a token, as it limits the token to
            const token = jwt.sign({id:data._id}, 'secretKey', {expiresIn: '10days'}); // Sign the token with a secret key and set an expiration time
             
             // console.log(token, "new token");
  

      // If the user is found and the password is valid, return the user data
      // Note: Do not return the password in a real application, this is just for demonstration
      return res.status(200).json({
         user:{
                    email: data.email,
                    fullName: data.fullName,
                    password: data.password
                },
                // Return the JWT token in the response
              message: "Login successful",
                accessToken: token
      })
    }


  catch(err){
      return  res.status(500).json({ message: "Error fetching data", error: err.message });
  }
  };

