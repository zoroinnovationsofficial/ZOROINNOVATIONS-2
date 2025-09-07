import express from 'express';
import * as ctrl from '../controllers/teamMember.controller.js';
import { checkAdminRole } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Protect all routes with isAdmin
router.use(checkAdminRole);

router.get('/', ctrl.getAllTeamMembers);
router.get('/:id', ctrl.getTeamMemberById);
router.post('/', ctrl.createTeamMember);
router.put('/:id', ctrl.updateTeamMember);
router.delete('/:id', ctrl.deleteTeamMember);

export default router;
