import express from 'express';
import { createOrder, deleteOrder, getAllOrders, getOrderByUserId, updateOrder } from '../controllers/order.contoller.js';
const router = express.Router();

// Create a new order
router.post('/', createOrder);
// Get all orders
router.get('/', getAllOrders);
// Get an order by ID
router.get('/:id', getOrderByUserId);
// Update an order by ID
router.put('/:id', updateOrder);
// Delete an order by ID
router.delete('/:id', deleteOrder);

export default router;