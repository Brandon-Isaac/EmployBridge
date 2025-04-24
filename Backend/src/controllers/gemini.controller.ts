import { Request, Response } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { asyncHandler } from '../middleware/asyncHandler';
import * as dotenv from 'dotenv';
dotenv.config();

export class GeminiController {
  private genAI: GoogleGenerativeAI;

  constructor() {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not configured');
    }
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  }

  generateCareerPath = asyncHandler(async (req: Request, res: Response) => {
    try {
      const { prompt } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const formattedPrompt = `Generate a detailed career path for: ${prompt}. 
      Include current level, next level, required skills, and milestones. 
      Format the response as a JSON object matching this structure:
      {
        "title": "string",
        "description": "string",
        "currentLevel": "string",
        "nextLevel": "string",
        "progress": number,
        "requiredSkills": string[],
        "milestones": [
          {
            "title": "string",
            "description": "string",
            "status": "completed" | "in-progress" | "upcoming",
            "skills": string[],
            "timeframe": "string"
          }
        ]
      }`;

      const result = await model.generateContent(formattedPrompt);
      const response = await result.response;
      const text = response.text();

      try {
        // Remove markdown code block formatting if present
        const cleanJson = text.replace(/```json\n|\n```/g, '').trim();
        const careerPath = JSON.parse(cleanJson);
        return res.json(careerPath);
      } catch (error) {
        console.error('Error parsing Gemini response:', error);
        return res.status(500).json({ 
          error: 'Error parsing AI response',
          details: error.message,
          rawResponse: text 
        });
      }
    } catch (error) {
      console.error('Error in generateCareerPath:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
} 