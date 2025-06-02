// mongp db connection

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


// MongoDB connection

const dbConnection = async () => {
    try {
        const mongoUrl = process.env.MONGO_URL;
        await mongoose.connect(mongoUrl)
           
            .then(() => {
                console.log('MongoDB connected successfully');
            })
            .catch((err) => {
                console.error('MongoDB connection error:', err);
   
}) 
    }     catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }}

export default dbConnection;