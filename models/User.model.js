

import mongoose from 'mongoose';
//const { Schema } = mongoose;

const userSchema = new mongoose.Schema({

    fullName: String,
    password: String,
    email:{
        type: String,
        unique: true, // Ensure email is unique
    }

});

// Export the model
const UserModel = mongoose.model('User', userSchema);
export default UserModel;