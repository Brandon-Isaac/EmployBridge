import { Response } from 'express';
import { getRepository, In } from 'typeorm';
import { JobSeeker } from '../entities/job-seeker.entity';
import { Skill } from '../entities/skill.entity';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class JobSeekerSkillsController {
  private get jobSeekerRepository() {
    return getRepository(JobSeeker);
  }

  private get skillRepository() {
    return getRepository(Skill);
  }

  getJobSeekerSkills = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id },
      relations: ['skills'],
      select: ['id', 'skills']
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    return res.json({ skills: jobSeeker.skills });
  });

  addSkillToJobSeeker = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { skillId } = req.params;

    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id },
      relations: ['skills']
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    const skill = await this.skillRepository.findOne({
      where: { id: skillId, isActive: true }
    });

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    // Check if skill is already added
    if (jobSeeker.skills.some(s => s.id === skillId)) {
      return res.status(400).json({ message: 'Skill already added to profile' });
    }

    // Add skill to job seeker's skills
    jobSeeker.skills = [...jobSeeker.skills, skill];

    await this.jobSeekerRepository.save(jobSeeker);

    return res.json({
      message: 'Skill added successfully',
      skill: {
        id: skill.id,
        name: skill.name,
        category: skill.category,
        description: skill.description
      }
    });
  });

  removeSkillFromJobSeeker = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { skillId } = req.params;

    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id },
      relations: ['skills']
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    // Check if skill exists in job seeker's skills
    const skillIndex = jobSeeker.skills.findIndex(s => s.id === skillId);
    if (skillIndex === -1) {
      return res.status(404).json({ message: 'Skill not found in profile' });
    }

    // Remove skill from job seeker's skills
    jobSeeker.skills.splice(skillIndex, 1);

    await this.jobSeekerRepository.save(jobSeeker);

    return res.json({ message: 'Skill removed successfully' });
  });

  updateJobSeekerSkills = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { skillIds } = req.body;

    if (!Array.isArray(skillIds)) {
      return res.status(400).json({ message: 'skillIds must be an array' });
    }

    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id },
      relations: ['skills']
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    // Get all skills from the provided IDs that are active
    const skills = await this.skillRepository.find({
      where: { id: In(skillIds), isActive: true }
    });

    if (skills.length !== skillIds.length) {
      return res.status(400).json({ message: 'One or more skills not found' });
    }

    // Update job seeker's skills
    jobSeeker.skills = skills;

    await this.jobSeekerRepository.save(jobSeeker);

    return res.json({
      message: 'Skills updated successfully',
      skills
    });
  });
} 