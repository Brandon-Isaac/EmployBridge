import { Request, Response } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { asyncHandler } from '../middleware/async-handler';
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
      IMPORTANT: Return ONLY a valid JSON object with no markdown formatting, no backticks, and no additional text.
      The JSON must match this exact structure:
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
        // Simple trim of whitespace
        const cleanJson = text.trim();
        
        // Log the raw response for debugging
        console.log('Raw Gemini response:', text);
        console.log('Cleaned JSON:', cleanJson);
        
        const careerPath = JSON.parse(cleanJson);
        
        // Validate the parsed JSON structure
        if (!careerPath.title || !careerPath.description || !careerPath.currentLevel || 
            !careerPath.nextLevel || !careerPath.requiredSkills || !careerPath.milestones) {
          throw new Error('Response missing required fields');
        }
        
        return res.json(careerPath);
      } catch (error) {
        console.error('Error parsing Gemini response:', error);
        console.error('Raw response:', text);
        return res.status(500).json({ 
          error: 'Error parsing AI response',
          details: error.message,
          rawResponse: text,
          stack: error.stack
        });
      }
    } catch (error) {
      console.error('Error in generateCareerPath:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
} 