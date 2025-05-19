import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    
   orderID: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        requied: true,
    },
    order_items: [
        {
            name: {
                type: String,
                required: true,
            },
            qty: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
        }
    ],
    date: {
        type: Date,
        default: () => new Date(),
        
    },
    paymentid: {
        type: String,
        
    },
    status: {
        type: number,
        default: 0,
    },
    note: {
        type: String,
    },
    Name:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    }},
     {
    timestamps: true
    });

const Order = mongoose.model("Orders", OrderSchema);
export default Order;