import express from 'express';
import {
  getPopularPosts,
  getAllPosts,
} from '../controllers/post.controller.js';

const router = express.Router();

router.get('/popular', getPopularPosts);
router.get('/', getAllPosts);

export default router;
