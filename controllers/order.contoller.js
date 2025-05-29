import Order from '../models/order.model.js';
import asyncHandler from 'express-async-handler';

// Create a new order
// POST /api/order

export const createOrder = asyncHandler(async (req, res) => {

    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();

    if (savedOrder) {
        res.status(201).json({
            success: true,
            message: "Order created successfully",
            order: savedOrder
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Order creation failed"
        });
    }
})


