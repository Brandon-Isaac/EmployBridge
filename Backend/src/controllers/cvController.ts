import { Request, Response } from 'express';
import { CV } from '../entities/CV';
import { User } from '../entities/User';
import { Skill } from '../entities/Skill';
import { AppDataSource } from '../data-source';
import { OpenAI } from 'openai';
import { Experience } from '../entities/Experience';
import { Education } from '../entities/Education';
import asyncHandler from '../middleware/asyncHandler';
import { Job } from '../entities/Job';
import fs from 'fs';
import path from 'path';

const experienceRepository = AppDataSource.getRepository(Experience);
const educationRepository = AppDataSource.getRepository(Education);
const skillRepository = AppDataSource.getRepository(Skill);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
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

export const uploadCV =asyncHandler( async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const user = await userRepository.findOne({ 
      where: { id: userId },
      relations: ['cv']
    });
    if (!user) {
      // Clean up uploaded file
      fs.unlinkSync(req.file.path);
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if user already has a CV
    const existingCV = await cvRepository.findOne({ where: { user: { id: userId } }});
    if (existingCV) {
      // Delete old file
      if (existingCV.filePath && fs.existsSync(existingCV.filePath)) {
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

    // Update user's CV reference
    user.cv = cv;
    await userRepository.save(user);

    res.status(201).json(cv);
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ message: 'Error uploading CV', error });
  }
});

export const getCV = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const cv = await cvRepository.findOne({
      where: { user: { id: userId } },
    });

    if (!cv) {
      return res.status(404).json({ message: 'CV not found' });
    }

    // Read the CV content if the file exists
    let content = null;
    if (cv.filePath && fs.existsSync(cv.filePath)) {
      content = fs.readFileSync(cv.filePath, 'utf-8');
    }

    res.json({
      ...cv,
      content,
      downloadUrl: `/api/cvs/download/${cv.id}`
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching CV', error });
  }
});

export const deleteCV = asyncHandler(async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const cv = await cvRepository.findOne({
      where: { user: { id: userId } },
    });

    if (!cv) {
      return res.status(404).json({ message: 'CV not found' });
    }

    if (cv.filePath && fs.existsSync(cv.filePath)) {
      fs.unlinkSync(cv.filePath);
    }

    await cvRepository.delete(cv.id);
    res.json({ message: 'CV deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting CV', error });
  }
});

export const extractSkillsFromCV =asyncHandler( async (req: Request, res: Response) => {
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
});

export const generateAICV = asyncHandler(async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;

    // Get all user data needed for CV
    const user = await userRepository.findOne({
      where: { id: userId },
      relations: ['skills', 'experiences', 'educations', 'cv'],
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete existing CV if it exists
    if (user.cv) {
      if (user.cv.filePath && fs.existsSync(user.cv.filePath)) {
        fs.unlinkSync(user.cv.filePath);
      }
      await cvRepository.delete(user.cv.id);
    }

    let cvContent: string;

    try {
      // Prepare prompt for AI
      const prompt = `Generate a professional CV in Markdown format for ${user.name} with the following details:
      
      Skills: ${user.skills?.map(skill => skill.name).join(', ') || 'None'}
      
      Work Experience:
      ${user.experiences?.map(exp => `
      - ${exp.title} at ${exp.company} (${exp.startDate.toLocaleDateString()} - ${exp.current ? 'Present' : exp.endDate?.toLocaleDateString()})
        ${exp.description}
      `).join('\n') || 'No experience listed'}
      
      Education:
      ${user.educations?.map(edu => `
      - ${edu.degree} in ${edu.fieldOfStudy} from ${edu.institution} (${edu.startDate.toLocaleDateString()} - ${edu.current ? 'Present' : edu.endDate?.toLocaleDateString()})
        ${edu.description || ''}
      `).join('\n') || 'No education listed'}
      
      Include sections for:
      1. Professional Summary (3-4 sentences)
      2. Skills (grouped by category if possible)
      3. Work Experience (with bullet points of key achievements)
      4. Education
      5. Any other relevant sections (Projects, Certifications, etc.)
      
      Format the CV professionally with proper Markdown headings and bullet points.`;

      // Call OpenAI API
      const completion = await openai.chat.completions.create({
        messages: [
          { 
            role: 'system', 
            content: 'You are a professional CV writer. Generate well-structured CVs in Markdown format based on user-provided information.' 
          },
          { role: 'user', content: prompt }
        ],
        model: 'gpt-3.5-turbo',
      });

      cvContent = completion.choices[0].message.content || '';
    } catch (apiError: any) {
      // If API call fails (e.g., quota exceeded), generate a basic CV
      console.warn('OpenAI API error:', apiError);
      
      // Generate a basic CV format
      cvContent = `# ${user.name}'s Professional CV

## Professional Summary
${user.bio || 'Experienced professional with a strong background in their field.'}

## Skills
${user.skills?.map(skill => `- ${skill.name}`).join('\n') || 'No skills listed'}

## Work Experience
${user.experiences?.map(exp => `
### ${exp.title} at ${exp.company}
*${exp.startDate.toLocaleDateString()} - ${exp.current ? 'Present' : exp.endDate?.toLocaleDateString()}*

${exp.description}
`).join('\n') || 'No experience listed'}

## Education
${user.educations?.map(edu => `
### ${edu.degree} in ${edu.fieldOfStudy}
*${edu.institution}*
*${edu.startDate.toLocaleDateString()} - ${edu.current ? 'Present' : edu.endDate?.toLocaleDateString()}*

${edu.description || ''}
`).join('\n') || 'No education listed'}`;
    }

    if (!cvContent) {
      return res.status(500).json({ message: 'Failed to generate CV content' });
    }

    // Create new CV
    const cv = new CV();
    cv.user = user;
    cv.fileName = `${user.name.replace(/\s+/g, '_')}_CV_${new Date().toISOString().split('T')[0]}.md`;
    cv.filePath = path.join('generated', cv.fileName);
    cv.extractedSkills = user.skills?.map(skill => skill.name) || [];

    // Ensure directory exists
    const generatedDir = path.join(process.cwd(), 'generated');
    if (!fs.existsSync(generatedDir)) {
      fs.mkdirSync(generatedDir, { recursive: true });
    }

    // Save markdown file
    fs.writeFileSync(path.join(process.cwd(), cv.filePath), cvContent);

    // Save CV to database
    const savedCV = await cvRepository.save(cv);

    // Update user's CV reference
    user.cv = savedCV;
    await userRepository.save(user);

    res.json({
      message: 'CV generated successfully',
      cv: {
        id: savedCV.id,
        fileName: savedCV.fileName,
        filePath: savedCV.filePath,
        extractedSkills: savedCV.extractedSkills,
        userId: user.id,
        content: cvContent,
        downloadUrl: `/api/cvs/download/${savedCV.id}`,
        createdAt: savedCV.createdAt,
        updatedAt: savedCV.updatedAt
      },
    });
  } catch (error) {
    console.error('Error generating AI CV:', error);
    res.status(500).json({ message: 'Error generating CV', error });
  }
});

export const downloadCV = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cv = await cvRepository.findOne({ where: { id } });

    if (!cv || !cv.filePath || !fs.existsSync(cv.filePath)) {
      return res.status(404).json({ message: 'CV not found' });
    }

    if (cv.filePath && cv.fileName) {
      res.download(cv.filePath, cv.fileName);
    } else {
      res.status(400).json({ message: 'Invalid CV file path or name' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error downloading CV', error });
  }
});