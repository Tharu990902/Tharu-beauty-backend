import User from "../models/usermodel.js";
import generateToken from "../util/generateToken.js";
import asyncHandler from 'express-async-handler';


// Register a new user
// POST /api/auth/register
// @access Public

export const registerUser = asyncHandler(async (req, res) => {

    const {email , password , firstname, lastname } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        email,
        password,
        firstname,
        lastname,
    });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }


})

// Login a user
// POST /api/auth/login
// @access Public

export const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        const token = generateToken(res, user._id);
        
        res.status(200).json({
            _id: user._id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            token: token,
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }})

// Logout a user
// POST /api/auth/logout
// @access Public


export const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 0, // Set maxAge to 0 to delete the cookie
    });
    res.status(200).json({ message: "User logged out successfully" });
});


