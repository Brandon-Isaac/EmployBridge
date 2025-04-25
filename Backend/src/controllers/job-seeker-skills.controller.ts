import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { JobSeeker } from '../entities/job-seeker.entity';
import { Skill, SkillCategory, SkillLevel } from '../entities/skill.entity';
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

  async addSkill(req: Request, res: Response) {
    try {
      const { jobSeekerId } = req.params;
      const { name, category, level } = req.body;

      const jobSeeker = await this.jobSeekerRepository.findOne({
        where: { id: jobSeekerId }
      });

      if (!jobSeeker) {
        return res.status(404).json({ message: 'Job seeker not found' });
      }

      let skill = await this.skillRepository.findOne({
        where: { name }
      });

      if (!skill) {
        skill = this.skillRepository.create({
          name,
          category: category || SkillCategory.TECHNICAL,
          level: level || SkillLevel.INTERMEDIATE
        });
        await this.skillRepository.save(skill);
      }

      jobSeeker.skills = [...(jobSeeker.skills || []), skill];
      await this.jobSeekerRepository.save(jobSeeker);

      return res.json(skill);
    } catch (error) {
      console.error('Error adding skill:', error);
      return res.status(500).json({ message: 'Error adding skill' });
    }
  }

  async removeSkill(req: Request, res: Response) {
    try {
      const { jobSeekerId, skillId } = req.params;

      const jobSeeker = await this.jobSeekerRepository.findOne({
        where: { id: jobSeekerId },
        relations: ['skills']
      });

      if (!jobSeeker) {
        return res.status(404).json({ message: 'Job seeker not found' });
      }

      const skill = await this.skillRepository.findOne({
        where: { id: skillId }
      });

      if (!skill) {
        return res.status(404).json({ message: 'Skill not found' });
      }

      jobSeeker.skills = jobSeeker.skills.filter(s => s.id !== skillId);
      await this.jobSeekerRepository.save(jobSeeker);

      return res.json({ message: 'Skill removed successfully' });
    } catch (error) {
      console.error('Error removing skill:', error);
      return res.status(500).json({ message: 'Error removing skill' });
    }
  }

  async updateSkillLevel(req: Request, res: Response) {
    try {
      const { jobSeekerId, skillId } = req.params;
      const { level } = req.body;

      const jobSeeker = await this.jobSeekerRepository.findOne({
        where: { id: jobSeekerId },
        relations: ['skills']
      });

      if (!jobSeeker) {
        return res.status(404).json({ message: 'Job seeker not found' });
      }

      const skill = jobSeeker.skills.find(s => s.id === skillId);
      if (!skill) {
        return res.status(404).json({ message: 'Skill not found' });
      }

      skill.level = level;
      await this.skillRepository.save(skill);

      return res.json(skill);
    } catch (error) {
      console.error('Error updating skill level:', error);
      return res.status(500).json({ message: 'Error updating skill level' });
    }
  }

  updateJobSeekerSkills = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { skills } = req.body;

    if (!Array.isArray(skills)) {
      return res.status(400).json({ message: 'skills must be an array' });
    }

    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id },
      relations: ['skills']
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    // Create or update skills
    const updatedSkills = await Promise.all(skills.map(async (skillData) => {
      let skill = await this.skillRepository.findOne({
        where: { name: skillData.name }
      });

      if (!skill) {
        skill = this.skillRepository.create({
          name: skillData.name,
          level: skillData.level,
          category: SkillCategory.TECHNICAL // Using the enum
        });
      } else {
        skill.level = skillData.level;
      }

      return await this.skillRepository.save(skill);
    }));

    // Update job seeker's skills
    jobSeeker.skills = updatedSkills;
    await this.jobSeekerRepository.save(jobSeeker);

    return res.json({
      message: 'Skills updated successfully',
      skills: updatedSkills.map(skill => ({
        id: skill.id,
        name: skill.name,
        level: skill.level,
        category: skill.category
      }))
    });
  });
} 