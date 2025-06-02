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
        
    },
    address:{
        type: String,
        
    },
    type:{
        type: String,
        default: "customer",
        
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

// Hash password before saving to database
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// match password method
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("Users", userSchema);
export default User;