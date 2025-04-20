import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../server';
import { User } from '../entities/User';
import { GoogleGenerativeAI } from '@google/generative-ai';

const router = Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Middleware to verify JWT token
const authenticateToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err: any, user: any) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        return next();
    });
};

// Get user skills
router.get('/my-skills', authenticateToken, async (req: any, res) => {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { id: req.user.userId } });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ skills: user.skills });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching skills' });
    }
});

// Update user skills
router.put('/update-skills', authenticateToken, async (req: any, res) => {
    try {
        const { skills } = req.body;
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { id: req.user.userId } });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.skills = skills;
        await userRepository.save(user);

        res.json({ message: 'Skills updated successfully', skills: user.skills });
    } catch (error) {
        res.status(500).json({ message: 'Error updating skills' });
    }
});

// Get skill recommendations using Gemini AI
router.post('/recommendations', authenticateToken, async (req: any, res) => {
    try {
        const { currentSkills, careerGoal } = req.body;
        
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const prompt = `Based on the following current skills: ${currentSkills.join(', ')}, 
        and the career goal: ${careerGoal}, 
        suggest 5 relevant skills to learn next. 
        Format the response as a JSON array of strings.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        // Parse the response and extract skills
        const recommendedSkills = JSON.parse(text);

        res.json({ recommendedSkills });
    } catch (error) {
        console.error('Error getting recommendations:', error);
        res.status(500).json({ message: 'Error getting skill recommendations' });
    }
});

export const skillRoutes = router; 