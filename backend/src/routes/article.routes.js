import express from 'express';
import {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from '../controllers/article.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import {
  authMiddleware,
  checkAdminRole,
} from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', getAllArticles);
router.get('/:id', getArticleById);

router.post(
  '/',
  authMiddleware,
  checkAdminRole,
  upload.single('image'),
  createArticle,
);
router.put(
  '/:id',
  authMiddleware,
  checkAdminRole,
  upload.single('image'),
  updateArticle,
);
router.delete('/:id', authMiddleware, checkAdminRole, deleteArticle);

export default router;
