import app from '../app.js';
import serverless from 'serverless-http';
import dotenv from 'dotenv';
import connectDB from '../db/db.js';

dotenv.config({ path: './.env' });

let isConnected = false;

async function handler(req, res) {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
  return serverless(app)(req, res);
}

export default handler;
