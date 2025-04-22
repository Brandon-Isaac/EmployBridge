import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jobSeekerRoutes from './routes/job-seeker.routes';
import employerRoutes from './routes/employer.routes';
import companyRoutes from './routes/company.routes';
import jobRoutes from './routes/job.routes';
import skillRoutes from './routes/skill.routes';
import { initializeDatabase } from './config/database';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database connection
initializeDatabase()
  .then(() => {
    // Routes
    app.use('/api/job-seekers', jobSeekerRoutes);
    app.use('/api/employers', employerRoutes);
    app.use('/api/companies', companyRoutes);
    app.use('/api/jobs', jobRoutes);
    app.use('/api/skills', skillRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
  });
