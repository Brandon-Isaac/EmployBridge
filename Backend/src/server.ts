import express from 'express';
import 'reflect-metadata';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source'; // Ensure this path matches your project structure


// Routes
import userRoutes from './routes/userRoutes';
import skillRoutes from './routes/skillRoutes';
import jobRoutes from './routes/jobRoutes';
import applicationRoutes from './routes/applicationRoutes';
import portfolioRoutes from './routes/portfolioRoutes';
import cvRoutes from './routes/cvRoutes';
import experienceRoutes from './routes/experienceRoutes';
import educationRoutes from './routes/educationRoutes';
import chatbotRoutes from './routes/chatbotRoutes';
import careerPathRoutes from './routes/career-path.routes';
import interviewRoutes from './routes/interview.routes'; // Import interview routes
import analyticsRoutes from './routes/analyticsRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT||3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });


// Routes
app.use('/api/users', userRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/portfolios', portfolioRoutes);
app.use('/api/cvs', cvRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/educations', educationRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/career-paths', careerPathRoutes);
app.use('/api/interviews',interviewRoutes); // Add this line for interview routes
app.use('/api/analytics', analyticsRoutes);


// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});