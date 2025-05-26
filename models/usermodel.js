import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({

    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    type:{
        type: String,
        default: "customer",
        required: true
    },
    status:{
        type: Number,
        default: 0,
    }
    ,
    isBlocked:{
        type: Boolean,
        default: false
    },
    profilepicture:{
        type: String,
        default: "https://res.cloudinary.com/dqj0xg3zv/image/upload/v1698230982/DefaultProfilePicture.png"
    }

})



const User = mongoose.model("Users", userSchema);
export default User;