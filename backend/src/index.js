import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config({
  path: path.join(__dirname, '../.env'),
});

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/zoroinnovations';

console.log('🚀 Starting ZoroInnovations Backend Server...');
console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
console.log(`🗄️  MongoDB URI: ${MONGO_URI}`);

// Connect to DB as soon as function loads
(async () => {
  try {
    console.log('🔗 Attempting to connect to MongoDB...');
    await connectDB();
    console.log('✅ MongoDB connected successfully!');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
  }
})();

// Export the app instead of listening on a port
export default app;
