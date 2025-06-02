import express from 'express';
import { createOrder, deleteOrder, getAllOrders, getOrderByUserId, updateOrder } from '../controllers/order.contoller.js';
const router = express.Router();
import protect from '../middleware/auth.middleware.js';

// Create a new order
router.post('/', createOrder);
// Get all orders
router.get('/',protect, getAllOrders);
// Get an order by ID
router.get('/:id', getOrderByUserId);
// Update an order by ID
router.put('/:id', updateOrder);
// Delete an order by ID
router.delete('/:id', deleteOrder);

export default router;