import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';   
import { notFound, errorHandler } from './middleware/Errorhandling.js';
import authRoutes from './routes/auth.route.js';
import dbConnection from './util/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();
const app = express();
app.use(express.json());

// CORS configuration
app.use(cors());

// Cookie parser middleware
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);




app.listen(5000, () => {
    console.log(`Server is running on PORT 5000`);
    dbConnection(); // Connect to MongoDB
});


// Middleware
app.use(errorHandler);
app.use(notFound);