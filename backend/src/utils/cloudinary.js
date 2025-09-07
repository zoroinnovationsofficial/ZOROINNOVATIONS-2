// src/utils/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
  api_key: process.env.CLOUDINARY_API_KEY || '',
  api_secret: process.env.CLOUDINARY_API_SECRET || '',
});

/**
 * Upload from a local file path (keeps original function for local use)
 */
export async function generateImageUrl(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'Zoroinnovations',
      resource_type: 'image',
    });
    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary Upload Error (filePath):', error);
    throw new Error('Image upload failed');
  }
}

/**
 * Upload from a Buffer (serverless-friendly).
 * Returns secure_url on success.
 */
export async function uploadBuffer(buffer, filename = 'upload') {
  // If Cloudinary credentials are not provided, throw an informative error
  if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET || !process.env.CLOUDINARY_CLOUD_NAME) {
    throw new Error('Cloudinary credentials not set in environment variables');
  }

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'Zoroinnovations',
        resource_type: 'auto',
        public_id: filename.replace(/\.[^/.]+$/, ''), // strip ext for public_id
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload_stream error:', error);
          return reject(error);
        }
        resolve(result.secure_url);
      }
    );
    stream.end(buffer);
  });
}

export default generateImageUrl;
