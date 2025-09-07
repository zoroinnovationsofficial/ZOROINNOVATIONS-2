import express from 'express';
import {
  getAllMembers,
  createMember,
  updateMember,
  deleteMember,
  getMemberById,
} from '../controllers/teamMemberController.js';
const router = express.Router();

router.get('/', getAllMembers);
router.post('/', createMember);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);
router.get('/:id', getMemberById);

export default router;
