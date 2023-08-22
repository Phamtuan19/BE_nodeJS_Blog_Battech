import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const DB_Name = process.env.DB_Name;
const DB_URL = `mongodb+srv://phamtuan19hd:phamtuan1982000@cluster0.4mddcjn.mongodb.net/?retryWrites=true&w=majority`;

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('Kết nối db thành công!');
    } catch (err) {
        console.log('Kết nối db thất bại! ' + err);
    }
};
