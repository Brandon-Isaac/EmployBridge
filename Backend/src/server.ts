import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import cors from 'cors';
import dotenv from 'dotenv';


// Routes
import userRoutes from './routes/userRoutes';
import skillRoutes from './routes/skillRoutes';
import jobRoutes from './routes/jobRoutes';
import applicationRoutes from './routes/applicationRoutes';
import portfolioRoutes from './routes/portfolioRoutes';
import cvRoutes from './routes/cvRoutes';
import experienceRoutes from './routes/experienceRoutes';
import educationRoutes from './routes/educationRoutes';
import chatbotRoutes from './src/routes/chatbotRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
createConnection().then(() => {
  console.log('Database connected');
}).catch(error => console.log('Database connection error:', error));

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


// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});