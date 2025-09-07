// src/routes/adminTeamMemberRoutes.js
import express from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { uploadBuffer } from '../utils/cloudinary.js'; // named export
import {
  getAllMembers,
  createMember,
  updateMember,
  deleteMember,
} from '../controllers/teamMemberController.js';

const router = express.Router();

// GET all
router.get('/', getAllMembers);

/**
 * Create member
 * - accepts a file field named "image" (multipart/form-data)
 * - uses memoryStorage so nothing is written to disk
 * - if Cloudinary is configured, uploads the buffer and sets req.body.image to the returned URL
 */
router.post(
  '/',
  upload.single('image'),
  async (req, res, next) => {
    try {
      // If there is a file and Cloudinary configured, upload it
      if (req.file && req.file.buffer) {
        try {
          const imageUrl = await uploadBuffer(req.file.buffer, req.file.originalname || `member-${Date.now()}`);
          req.body.image = imageUrl;
        } catch (err) {
          // If Cloudinary not configured or upload failed, log and continue.
          console.warn('Image upload skipped or failed:', err.message);
          // Option: set req.body.image = null or leave as-is
          req.body.image = req.body.image || null;
        }
      }

      next();
    } catch (err) {
      console.error('Error in upload middleware:', err);
      res.status(500).json({ error: 'File processing error' });
    }
  },
  createMember
);

/**
 * Update member
 * - same behavior as create
 */
router.put(
  '/:id',
  upload.single('image'),
  async (req, res, next) => {
    try {
      if (req.file && req.file.buffer) {
        try {
          const imageUrl = await uploadBuffer(req.file.buffer, req.file.originalname || `member-${Date.now()}`);
          req.body.image = imageUrl;
        } catch (err) {
          console.warn('Image upload skipped or failed:', err.message);
          req.body.image = req.body.image || null;
        }
      }
      next();
    } catch (err) {
      console.error('Error in upload middleware (update):', err);
      res.status(500).json({ error: 'File processing error' });
    }
  },
  updateMember
);

router.delete('/:id', deleteMember);

export default router;
