import mongoose from "mongoose";


const ProductSchema = mongoose.Schema({

    productId: {
        type: String,
        required: true,
        unique: true
    },
    productname: {
        type: String,
        required: true
    },
    alternames: [
        {
            type: String
        }
    ],
    images: [{

        type: String
    }],
    price: {

        type: Number,
        required: true
    },
    lastprice: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    description:{
        type: String
    },
    category: {
       type: Array
    },
    brand: {
        type: String,
        
    },
    skintype: {
        type: Array,  
    },
    instock: {
        type: Boolean,
        default: true
    },
    rating:[
        {
            star: {
                type: Number,
            },
            name: {
                type: String,
            },
            comment: {
                type: String,
            },
            postedby: {
                type: String,
            },
        }
    ]
});

ProductSchema.index({"**$": "text"})
const Product  = mongoose.model("Products" , ProductSchema);

export default Product;