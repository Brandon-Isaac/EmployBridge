import { Request, Response } from 'express';
import { Skill } from '../entities/Skill';
import { User } from '../entities/User';
import { AppDataSource } from '../data-source';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import { In } from 'typeorm';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const skillRepository = AppDataSource.getRepository(Skill);
const userRepository = AppDataSource.getRepository(User);

export const getAllSkills = async (req: Request, res: Response) => {
  try {
    const skills = await skillRepository.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skills', error });
  }
};

export const getSkillById = async (req: Request, res: Response):Promise<void>=> {
  try {
    const { id } = req.params;
    const skill = await skillRepository.findOne({
      where: { id },
      relations: ['users', 'jobs'],
    });

    if (!skill) {
       res.status(404).json({ message: 'Skill not found' });
       return
    }

    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching skill', error });
  }
};

export const createSkill = async (req: Request, res: Response):Promise<void> => {
  try {
    const { name, category, description } = req.body;
    const skill = new Skill();
    skill.name = name;
    skill.category = category;
    if (description) skill.description = description;

    await skillRepository.save(skill);
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Error creating skill', error });
  }
};

export const updateSkill = async (req: Request, res: Response):Promise<void>=> {
  try {
    const { id } = req.params;
    const { name, category, description } = req.body;

    const skill = await skillRepository.findOne({ where: { id } });
    if (!skill) {
      res.status(404).json({ message: 'Skill not found' });
      return;
    }

    if (name) skill.name = name;
    if (category) skill.category = category;
    if (description) skill.description = description;

    await skillRepository.save(skill);
    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: 'Error updating skill', error });
  }
};

export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await skillRepository.delete(id);
    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting skill', error });
  }
};

export const getUserSkills = async (req: Request, res: Response):Promise<void> => {
  try {
    const { userId } = req.params;
    const user = await userRepository.findOne({
      where: { id: userId },
      relations: ['skills'],
    });

    if (!user) {
       res.status(404).json({ message: 'User not found' });
       return;
    }

    res.json(user.skills);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user skills', error });
  }
};

export const addUserSkill = async (req: Request, res: Response):Promise<void> => {
  try {
    const { userId } = req.params;
    const { skillId } = req.body;

    const user = await userRepository.findOne({
      where: { id: userId },
      relations: ['skills'],
    });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return
    }

    const skill = await skillRepository.findOne({ where: { id: skillId } });
    if (!skill) {
      res.status(404).json({ message: 'Skill not found' });
      return
    }

    if (!user.skills) user.skills = [];
    if (!user.skills.some(s => s.id === skillId)) {
      user.skills.push(skill);
      await userRepository.save(user);
    }

    res.json(user.skills);
  } catch (error) {
    res.status(500).json({ message: 'Error adding user skill', error });
  }
};

export const removeUserSkill = async (req: Request, res: Response):Promise<void> => {
  try {
    const { userId, skillId } = req.params;
    const user = await userRepository.findOne({
      where: { id: userId },
      relations: ['skills'],
    });

    if (!user) {
     res.status(404).json({ message: 'User not found' });
     return;
    }

    user.skills = user.skills?.filter(skill => skill.id !== skillId) || [];
    await userRepository.save(user);

    res.json(user.skills);
  } catch (error) {
    res.status(500).json({ message: 'Error removing user skill', error });
  }
};

export const generateSkills = async (req: Request, res: Response): Promise<void> => {
  try {
    const { jobTitle, jobDescription } = req.body;

    if (!jobTitle) {
      res.status(400).json({ message: 'Job title is required' });
      return;
    }

    const prompt = `Given the following job title${jobDescription ? ' and description' : ''}, generate the top 5 most important technical skills required for this position. 
    Return the response as a JSON array of skill objects with name, category, and description fields.
    Job Title: ${jobTitle}
    ${jobDescription ? `Job Description: ${jobDescription}` : ''}
    
    Example response format:
    [
      {
        "name": "JavaScript",
        "category": "Programming Language",
        "description": "Core programming language for web development"
      }
    ]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Clean the response text to ensure it's valid JSON
    const cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();
    const suggestedSkills = JSON.parse(cleanedText);

    // Check if skills already exist in database, if not create them
    const existingSkills = await skillRepository.find({
      where: { name: In(suggestedSkills.map((s: any) => s.name)) }
    });

    const existingSkillNames = existingSkills.map(s => s.name);
    const newSkills = suggestedSkills.filter((s: any) => !existingSkillNames.includes(s.name));

    if (newSkills.length > 0) {
      const skillsToCreate = newSkills.map((skill: any) => {
        const newSkill = new Skill();
        newSkill.name = skill.name;
        newSkill.category = skill.category;
        newSkill.description = skill.description;
        return newSkill;
      });

      await skillRepository.save(skillsToCreate);
    }

    // Return both existing and newly created skills
    const allSkills = await skillRepository.find({
      where: { name: In(suggestedSkills.map((s: any) => s.name)) }
    });

    res.json({
      message: 'Skills generated successfully',
      skills: allSkills,
      isNew: newSkills.length > 0
    });
  } catch (error: any) {
    console.error('Error generating skills:', error);
    res.status(500).json({ 
      message: 'Error generating skills', 
      error: error?.message || 'Unknown error occurred'
    });
  }
};