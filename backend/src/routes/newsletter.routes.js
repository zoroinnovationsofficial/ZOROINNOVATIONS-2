import express from 'express';
import {
  subscribe,
  unsubscribe,
} from '../controllers/newsletter.controller.js';

const router = express.Router();

router.post('/subscribe', subscribe);
router.delete('/unsubscribe', unsubscribe);

export default router;
