import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Experience } from '../entities/experience.entity';
import { JobSeeker } from '../entities/job-seeker.entity';
import { authMiddleware } from '../middleware/auth.middleware';

export class JobSeekerExperienceController {
  static async getExperiences(req: Request, res: Response) {
    try {
      const jobSeeker = await authMiddleware(req, res);
      if (!jobSeeker) return;

      const experienceRepository = getRepository(Experience);
      const experiences = await experienceRepository.find({
        where: { jobSeeker: { id: jobSeeker.id } },
        order: { startDate: 'DESC' }
      });

      res.json(experiences);
    } catch (error) {
      console.error('Error getting experiences:', error);
      res.status(500).json({ message: 'Error getting experiences' });
    }
  }

  static async addExperience(req: Request, res: Response) {
    try {
      const jobSeeker = await authMiddleware(req, res);
      if (!jobSeeker) return;

      const { title, company, location, description, startDate, endDate, isCurrent } = req.body;

      if (!title || !company || !startDate) {
        return res.status(400).json({ message: 'Title, company, and start date are required' });
      }

      const experienceRepository = getRepository(Experience);
      const experience = experienceRepository.create({
        title,
        company,
        location,
        description,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        isCurrent: isCurrent || false,
        jobSeeker
      });

      await experienceRepository.save(experience);
      res.status(201).json(experience);
    } catch (error) {
      console.error('Error adding experience:', error);
      res.status(500).json({ message: 'Error adding experience' });
    }
  }

  static async updateExperience(req: Request, res: Response) {
    try {
      const jobSeeker = await authMiddleware(req, res);
      if (!jobSeeker) return;

      const { id } = req.params;
      const { title, company, location, description, startDate, endDate, isCurrent } = req.body;

      const experienceRepository = getRepository(Experience);
      const experience = await experienceRepository.findOne({
        where: { id, jobSeeker: { id: jobSeeker.id } }
      });

      if (!experience) {
        return res.status(404).json({ message: 'Experience not found' });
      }

      experience.title = title || experience.title;
      experience.company = company || experience.company;
      experience.location = location || experience.location;
      experience.description = description || experience.description;
      experience.startDate = startDate ? new Date(startDate) : experience.startDate;
      experience.endDate = endDate ? new Date(endDate) : experience.endDate;
      experience.isCurrent = isCurrent !== undefined ? isCurrent : experience.isCurrent;

      await experienceRepository.save(experience);
      res.json(experience);
    } catch (error) {
      console.error('Error updating experience:', error);
      res.status(500).json({ message: 'Error updating experience' });
    }
  }

  static async deleteExperience(req: Request, res: Response) {
    try {
      const jobSeeker = await authMiddleware(req, res);
      if (!jobSeeker) return;

      const { id } = req.params;

      const experienceRepository = getRepository(Experience);
      const experience = await experienceRepository.findOne({
        where: { id, jobSeeker: { id: jobSeeker.id } }
      });

      if (!experience) {
        return res.status(404).json({ message: 'Experience not found' });
      }

      await experienceRepository.remove(experience);
      res.json({ message: 'Experience deleted successfully' });
    } catch (error) {
      console.error('Error deleting experience:', error);
      res.status(500).json({ message: 'Error deleting experience' });
    }
  }
} 