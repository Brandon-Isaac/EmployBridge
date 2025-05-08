import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { CareerPath } from '../entities/Careerpath';
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
      if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY is not configured');
      }

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

        Ensure the response is valid JSON and follows the exact structure above.
      `;

      const result = await model.generateContent(prompt);
      const response = result.response.text();
      
      if (!response) {
        throw new Error('Empty response from AI model');
      }

      try {
        // Clean the response string to ensure it's valid JSON
        const cleanedResponse = response.replace(/```json\n?|\n?```/g, '').trim();
        const parsedResponse = JSON.parse(cleanedResponse) as CareerPathResponse;
        
        // Validate the response structure
        if (!parsedResponse.timeline || !parsedResponse.education || 
            !parsedResponse.requiredSkills || !parsedResponse.alternativePaths) {
          throw new Error('Invalid response structure from AI model');
        }

        return parsedResponse;
      } catch (parseError) {
        console.error('Error parsing AI response:', parseError);
        console.error('Raw response:', response);
        throw new Error('Failed to parse AI response as valid JSON');
      }
    } catch (error) {
      console.error('Error generating AI career path:', error);
      if (error instanceof Error) {
        throw new Error(`Failed to generate career path: ${error.message}`);
      }
      throw new Error('Failed to generate career path: Unknown error');
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

  // Convert string arrays to Skill objects
  const convertToSkills = async (skillNames: string[]) => {
    const skills = await Promise.all(
      skillNames.map(async (name) => {
        try {
          // First try to find existing skill
          let skill = await skillRepository.findOne({ where: { name } });
          
          if (!skill) {
            // If skill doesn't exist, create it
            skill = skillRepository.create({ 
              name,
              category: 'Technical', // Default category for AI-generated skills
              description: `Skill required for ${targetRole} role`
            });
            await skillRepository.save(skill);
          }
          return skill;
        } catch (error: any) {
          // If we get a unique constraint error, try to find the skill again
          if (error.code === '23505') { // PostgreSQL unique violation error code
            const existingSkill = await skillRepository.findOne({ where: { name } });
            if (existingSkill) {
              return existingSkill;
            }
          }
          throw error; // Re-throw if it's a different error
        }
      })
    );
    return skills;
  };

  // Save the generated career path
  const newCareerPath = careerPathRepository.create({
    user,
    targetRole,
    currentRole,
    yearsOfExperience,
    timeline: careerPath.timeline,
    education: careerPath.education,
    requiredSkills: {
      current: await convertToSkills(careerPath.requiredSkills.current),
      missing: await convertToSkills(careerPath.requiredSkills.missing),
      development: await Promise.all(
        careerPath.requiredSkills.development.map(async (dev) => ({
          skill: (await convertToSkills([dev.skill]))[0],
          resources: dev.resources,
          timeline: dev.timeline
        }))
      )
    },
    alternativePaths: await Promise.all(
      careerPath.alternativePaths.map(async (path) => ({
        ...path,
        requiredSkills: await convertToSkills(path.requiredSkills)
      }))
    )
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