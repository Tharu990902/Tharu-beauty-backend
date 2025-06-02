import Order from '../models/ordermodel.js';
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

// update an order by id

export const updateOrder = asyncHandler(async (req, res) => {

    const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );

    if (updatedOrder) {
        res.status(200).json({
            success: true,
            message: "Order updated successfully",
            order: updatedOrder
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Order not found"
        });
    }
})

// delete an order by id

export const deleteOrder = asyncHandler(async (req, res) => {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    if (deletedOrder) {
        res.status(200).json({
            success: true,
            message: "Order deleted successfully"
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Order not found"
        });
    }
})

// Get all orders

export const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find();

    if (orders) {
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
            orders: orders
        });
    } else {
        res.status(400).json({
            success: false,
            message: "No orders found"
        });
    }
})

// Get one order by user ID

export const getOrderByUserId = asyncHandler(async (req, res) => {
    const orders = await Order.find({ userId: req.params.id });

    if (orders) {
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
            orders: orders
        });
    } else {
        res.status(400).json({
            success: false,
            message: "No orders found for this user"
        });
    }
})

