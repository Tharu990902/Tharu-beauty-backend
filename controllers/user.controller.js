import User from '../models/user.model.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

// Update user

export const updateUser = asyncHandler(async (req, res) => {

    if(req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        
    }
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );

    if (updatedUser) {
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user: {
                _id: updatedUser._id,
                email: updatedUser.email,
                firstname: updatedUser.firstname,
                lastname: updatedUser.lastname,
            }

})
    } else {
        res.status(400).json({
            success: false,
            message: "User not found"
        });
    }})

    // Delete user

    export const deleteUser = asyncHandler(async (req, res) => {

    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (deletedUser) {
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    }
    else{
        res.status(400).json({
            success: false,
            message: "User not found"
        });
    }
        })

// Get one user by ID

export const getUser = asyncHandler(async (req, res) => {

    const user = await User.findById(req.params.id);
    if(!user){
        res.status(400).json({
            success: false,
            message: "User Not found"
        })

    }
    else{
        res.status(200).json({
            success: true,
            user: user
        })
    }
})

// get all user

export const getAllUsers = asyncHandler(async (req, res) => {

    const users = await User.find();
    if(users.length > 0) {
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            users: users
        });
    } else {
        res.status(400).json({
            success: false,
            message: "No users found"
        });
    }
})