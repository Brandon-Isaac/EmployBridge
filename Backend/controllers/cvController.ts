import { Request, Response } from 'express';
import { CV, User } from '../entities';
import { AppDataSource } from '../data-source';
import fs from 'fs';
import path from 'path';

const cvRepository = AppDataSource.getRepository(CV);
const userRepository = AppDataSource.getRepository(User);

// Helper function to extract skills from CV text (simplified example)
const extractSkillsFromText = (text: string): string[] => {
  const commonSkills = [
    'JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js',
    'Python', 'Java', 'C#', 'SQL', 'PostgreSQL', 'MongoDB',
    'HTML', 'CSS', 'AWS', 'Azure', 'Docker', 'Kubernetes',
    'Machine Learning', 'TensorFlow', 'PyTorch', 'Data Analysis'
  ];

  const foundSkills = commonSkills.filter(skill => 
    text.toLowerCase().includes(skill.toLowerCase())
  );

  return foundSkills;
};

export const uploadCV = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      // Clean up uploaded file
      fs.unlinkSync(req.file.path);
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if user already has a CV
    const existingCV = await cvRepository.findOne({ where: { user: { id: userId } });
    if (existingCV) {
      // Delete old file
      if (fs.existsSync(existingCV.filePath)) {
        fs.unlinkSync(existingCV.filePath);
      }
      await cvRepository.delete(existingCV.id);
    }

    // Read file content for skill extraction
    const fileContent = fs.readFileSync(req.file.path, 'utf-8');
    const extractedSkills = extractSkillsFromText(fileContent);

    const cv = new CV();
    cv.user = user;
    cv.fileName = req.file.originalname;
    cv.filePath = req.file.path;
    cv.extractedSkills = extractedSkills;

    await cvRepository.save(cv);
    res.status(201).json(cv);
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ message: 'Error uploading CV', error });
  }
};

export const getCV = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const cv = await cvRepository.findOne({
      where: { user: { id: userId } },
    });

    if (!cv) {
      return res.status(404).json({ message: 'CV not found' });
    }

    res.json(cv);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching CV', error });
  }
};

export const deleteCV = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const cv = await cvRepository.findOne({
      where: { user: { id: userId } },
    });

    if (!cv) {
      return res.status(404).json({ message: 'CV not found' });
    }

    if (fs.existsSync(cv.filePath)) {
      fs.unlinkSync(cv.filePath);
    }

    await cvRepository.delete(cv.id);
    res.json({ message: 'CV deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting CV', error });
  }
};

export const extractSkillsFromCV = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Read file content for skill extraction
    const fileContent = fs.readFileSync(req.file.path, 'utf-8');
    const extractedSkills = extractSkillsFromText(fileContent);

    // Clean up the uploaded file
    fs.unlinkSync(req.file.path);

    res.json({ skills: extractedSkills });
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ message: 'Error extracting skills from CV', error });
  }
};