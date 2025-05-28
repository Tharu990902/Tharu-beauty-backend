import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';   
import { notFound, errorHandler } from './middleware/Errorhandling.js';
import authRoutes from './routes/auth.route.js';
import dbConnection from './util/db.js';

dotenv.config();
const app = express();

// CORS configuration
app.use(cors());

// Middleware
app.use(errorHandler);
app.use(notFound);

// Cookie parser middleware
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

app.use(express.json());


app.listen(5000, () => {
    console.log(`Server is running on PORT 5000`);
    dbConnection(); // Connect to MongoDB
});