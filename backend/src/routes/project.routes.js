import express from 'express';
import { getAllProjects, getProjectById, createProject, getAllCategories, getDashboardStats } from '../controllers/project.controller.js';

const router = express.Router();

// Project routes
router.get('/getAllProjects', getAllProjects);
router.get('/getProjectById/:id', getProjectById);
router.post('/createProject', createProject);
router.get('/getAllCategories', getAllCategories);
router.get('/getDashboardStats', getDashboardStats);

export default router;
