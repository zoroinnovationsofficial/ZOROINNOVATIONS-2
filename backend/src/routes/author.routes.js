import express from 'express';
import {
  getAuthors,
  getAuthorWithArticles,
} from '../controllers/author.controller.js';

const router = express.Router();

router.get('/', getAuthors);
router.get('/:id', getAuthorWithArticles);

export default router;
