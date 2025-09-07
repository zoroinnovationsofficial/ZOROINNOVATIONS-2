import express from 'express';
import {
  getCategories,
  getCategoryArticles,
} from '../controllers/category.controller.js';

const router = express.Router();

router.get('/', getCategories);
router.get('/:id/articles', getCategoryArticles);

export default router;
