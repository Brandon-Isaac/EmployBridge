import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { User } from './entities/User';
import { authRoutes } from './routes/auth';
import { skillRoutes } from './routes/skills';
// import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Gemini AI
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Database connection
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'skillsmatchai',
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/skills', skillRoutes);

// Health check endpoint
app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Initialize database and start server
AppDataSource.initialize()
    .then(() => {
        console.log('Database connection established');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error during Data Source initialization:', error);
    });

// Error handling middleware
app.use((_err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error(_err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
}); 