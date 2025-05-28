import express from 'express';
import {registerUser ,loginUser,logoutUser} from '../controllers/auth.contoller.js';

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Logout route
router.post('/logout', logoutUser);


export default router;