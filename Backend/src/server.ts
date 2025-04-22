import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import jobSeekerRoutes from './routes/job-seeker.routes';
import employerRoutes from './routes/employer.routes';
import companyRoutes from './routes/company.routes';
import jobRoutes from './routes/job.routes';
import skillRoutes from './routes/skill.routes';
import adminRoutes from './routes/admin.routes';
import jobApplicationRoutes from './routes/job-application.routes';
import { initializeDatabase } from './config/database';

// Load environment variables first
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Initialize database connection
initializeDatabase()
  .then(() => {
    console.log('Database connection established');
    
    // Routes
    app.use('/api/job-seekers', jobSeekerRoutes);
    app.use('/api/employers', employerRoutes);
    app.use('/api/companies', companyRoutes);
    app.use('/api/jobs', jobRoutes);
    app.use('/api/skills', skillRoutes);
    app.use('/api/admin', adminRoutes);
    app.use('/api/applications', jobApplicationRoutes);
    
    // Simple root route
    app.get('/', (_req, res) => {
      res.json({ message: 'EmployBridge Backend Server is running' });
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
  });
