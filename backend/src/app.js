import adminRoutes from './routes/admin.routes.js';
import publicRoutes from './routes/public.routes.js';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { urlencoded } from 'express';

import articleRouter from './routes/article.routes.js';
import authRoutes from './routes/auth.routes.js';
import authorRoutes from './routes/author.routes.js';
import categoryRoutes from './routes/category.routes.js';
import newsletterRoutes from './routes/newsletter.routes.js';
import postRouter from './routes/post.routes.js';
import projectRoutes from './routes/project.routes.js';

import adminTeamMemberRoutes from './routes/adminTeamMemberRoutes.js';
import teamMemberRoutes from './routes/teamMemberRoutes.js';

import employeeRoutes from './routes/employeeVerify.routes.js';

const app = express();

// --- START: Updated CORS Configuration ---

const allowedOrigins = [
  process.env.CLIENT_URL, // Your main production URL
  // This new regex matches ANY preview URL for any project in your Vercel account scope
  /^https:\/\/.*-rajathravikumar2205-gmailcoms-projects\.vercel\.app$/,
  'http://localhost:5173', // For local development
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

// --- END: Updated CORS Configuration ---

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1', publicRoutes);
app.use('/api/v1', adminRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/articles', articleRouter);
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/vV1/authors', authorRoutes);
app.use('/api/v1/newsletter', newsletterRoutes);
app.use('/api/v1/projects', projectRoutes);

app.use('/api/team-members', teamMemberRoutes);
app.use('/api/admin/team-members', adminTeamMemberRoutes);

app.use('/api/v1/employee', employeeRoutes);

export default app;