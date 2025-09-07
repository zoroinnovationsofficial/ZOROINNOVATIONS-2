// src/middlewares/multer.middleware.js
import multer from 'multer';

// Use memory storage so serverless functions don't try to write to disk
const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: {
    // 1 MB file limit — adjust as needed
    fileSize: 1 * 1000 * 1000,
  },
});

export default upload;
