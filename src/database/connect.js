import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const DB_Name = process.env.DB_Name;
const DB_URL = `mongodb://127.0.0.1:27017/${DB_Name}`;

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('Kết nối db thành công!');
    } catch (err) {
        console.log('Kết nối db thất bại! ' + err);
    }
};
