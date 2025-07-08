import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const cartModel = mongoose.model("cart", cartSchema);
export default cartModel;
