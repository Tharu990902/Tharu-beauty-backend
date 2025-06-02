import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/usermodel.js";
import dotenv from "dotenv";

dotenv.config();

// Middleware to protect routes

const protect = asyncHandler(async (req, res, next) => {

    let token;
    token  = req.cookies.jwt;

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.SECTER_KEY);
            req.user = await User.findById(decoded.userId).select("-password");
            next();
        } catch (error) {
            res.status(400);
            throw new Error("Not authorized, token failed");
        }
    }
    else{
        res.status(401);
        throw new Error("Not authorized, no token");
    }
})

export default protect;