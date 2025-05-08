import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { CareerPath } from '../entities/career-path.entity';
import { User } from '../entities/User';
import { Skill } from '../entities/Skill';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import  asyncHandler  from '../middleware/asyncHandler';

dotenv.config();

const careerPathRepository = AppDataSource.getRepository(CareerPath);
const userRepository = AppDataSource.getRepository(User);
const skillRepository = AppDataSource.getRepository(Skill);

// Initialize Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

// Extend Express Request type to include user
interface AuthenticatedRequest extends Request {
  user: {
    id: string;
  };
}

interface CareerPathResponse {
  timeline: Array<{
    phase: string;
    duration: string;
    activities: string[];
    milestones: string[];
  }>;
  education: Array<{
    level: string;
    field: string;
    duration: string;
    requirements: string[];
  }>;
  requiredSkills: {
    current: string[];
    missing: string[];
    development: Array<{
      skill: string;
      resources: string[];
      timeline: string;
    }>;
  };
  alternativePaths: Array<{
    role: string;
    description: string;
    requiredSkills: string[];
    matchScore: number;
  }>;
}

// Private function to generate career path using AI
const generateAICareerPath = async (
    targetRole: string,
    currentRole: string,
    yearsOfExperience: number,
    currentSkills: Skill[]
): Promise<CareerPathResponse> => {
    try {
      const prompt = `
        Generate a detailed career path for transitioning from ${currentRole} to ${targetRole}.
        Current experience: ${yearsOfExperience} years
        Current skills: ${currentSkills.map(s => s.name).join(', ')}

        Please provide:
        1. A timeline with phases, activities, and milestones
        2. Required education and certifications
        3. Skills development plan
        4. Alternative career paths

        Format the response as a JSON object with the following structure:
        {
          "timeline": [
            {
              "phase": "string",
              "duration": "string",
              "activities": ["string"],
              "milestones": ["string"]
            }
          ],
          "education": [
            {
              "level": "string",
              "field": "string",
              "duration": "string",
              "requirements": ["string"]
            }
          ],
          "requiredSkills": {
            "current": ["string"],
            "missing": ["string"],
            "development": [
              {
                "skill": "string",
                "resources": ["string"],
                "timeline": "string"
              }
            ]
          },
          "alternativePaths": [
            {
              "role": "string",
              "description": "string",
              "requiredSkills": ["string"],
              "matchScore": number
            }
          ]
        }
      `;

    const result = await model.generateContent(prompt);
    const response = result.response.text();
    return JSON.parse(response) as CareerPathResponse;
    } catch (error) {
      console.error('Error generating AI career path:', error);
      throw new Error('Failed to generate career path');
    }
};

// Generate a new career path
export const generateCareerPath = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { targetRole, currentRole, yearsOfExperience } = req.body;
  const userId = req.user.id;

  // Get user and their skills
  const user = await userRepository.findOne({
    where: { id: userId },
    relations: ['skills']
  });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Generate career path using AI
  const careerPath = await generateAICareerPath(
    targetRole,
    currentRole,
    yearsOfExperience,
    user.skills || []
  );

  // Save the generated career path
  const newCareerPath = careerPathRepository.create({
    user,
    targetRole,
    currentRole,
    yearsOfExperience,
    ...careerPath
  });

  await careerPathRepository.save(newCareerPath);

  return res.status(201).json(newCareerPath);
});

// Get all career paths for a user
export const getUserCareerPaths = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user.id;

  const careerPaths = await careerPathRepository.find({
    where: { user: { id: userId } },
    order: { createdAt: 'DESC' }
  });

  return res.json(careerPaths);
});

// Get a specific career path
export const getCareerPath = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const userId = req.user.id;

  const careerPath = await careerPathRepository.findOne({
    where: { id, user: { id: userId } }
  });

  if (!careerPath) {
    return res.status(404).json({ message: 'Career path not found' });
  }

  return res.json(careerPath);
});

// Update career path progress
export const updateProgress = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const { progress, isCompleted } = req.body;
  const userId = req.user.id;

  const careerPath = await careerPathRepository.findOne({
    where: { id, user: { id: userId } }
  });

  if (!careerPath) {
    return res.status(404).json({ message: 'Career path not found' });
  }

  careerPath.progress = progress;
  careerPath.isCompleted = isCompleted;

  await careerPathRepository.save(careerPath);

  return res.json(careerPath);
});

// Delete a career path
export const deleteCareerPath = asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const userId = req.user.id;

  const careerPath = await careerPathRepository.findOne({
    where: { id, user: { id: userId } }
  });

  if (!careerPath) {
    return res.status(404).json({ message: 'Career path not found' });
  }

  await careerPathRepository.remove(careerPath);

  return res.status(204).send();
}); 