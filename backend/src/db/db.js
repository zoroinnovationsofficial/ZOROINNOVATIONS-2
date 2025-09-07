import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zoroinnovations';

const connectDB = async () => {
  await mongoose.connect(MONGO_URI);
};

export default connectDB;
