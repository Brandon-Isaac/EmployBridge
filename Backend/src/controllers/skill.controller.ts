import { Response } from 'express';
import { getRepository } from 'typeorm';
import { Skill } from '../entities/skill.entity';
import { validate } from 'class-validator';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class SkillController {
  private get skillRepository() {
    return getRepository(Skill);
  }

  createSkill = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { name, category, description } = req.body;

    // Check if skill already exists
    const existingSkill = await this.skillRepository.findOne({ where: { name } });
    if (existingSkill) {
      return res.status(400).json({ message: 'Skill already exists' });
    }

    const skill = this.skillRepository.create({
      name,
      category,
      description
    });

    const errors = await validate(skill);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await this.skillRepository.save(skill);

    return res.status(201).json({
      message: 'Skill created successfully',
      skill
    });
  });

  getSkills = asyncHandler(async (_req: AuthRequest, res: Response) => {
    const skills = await this.skillRepository.find({
      where: { isActive: true },
      select: ['id', 'name', 'category', 'description']
    });

    return res.json({ skills });
  });

  getSkill = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const skill = await this.skillRepository.findOne({
      where: { id, isActive: true },
      select: ['id', 'name', 'category', 'description']
    });

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    return res.json({ skill });
  });

  updateSkill = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const { name, category, description } = req.body;

    const skill = await this.skillRepository.findOne({ where: { id, isActive: true } });

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    // If name is being updated, check if new name already exists
    if (name && name !== skill.name) {
      const existingSkill = await this.skillRepository.findOne({ where: { name } });
      if (existingSkill) {
        return res.status(400).json({ message: 'Skill with this name already exists' });
      }
    }

    skill.name = name || skill.name;
    skill.category = category || skill.category;
    skill.description = description || skill.description;

    const errors = await validate(skill);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await this.skillRepository.save(skill);

    return res.json({
      message: 'Skill updated successfully',
      skill
    });
  });

  deleteSkill = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const skill = await this.skillRepository.findOne({ where: { id, isActive: true } });

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    // Soft delete by setting isActive to false instead of removing
    skill.isActive = false;
    await this.skillRepository.save(skill);

    return res.json({ message: 'Skill deleted successfully' });
  });

  // Public endpoints
  searchSkills = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { name, category } = req.query;

    const query = this.skillRepository.createQueryBuilder('skill')
      .where('skill.isActive = :isActive', { isActive: true });

    if (name) {
      query.andWhere('LOWER(skill.name) LIKE LOWER(:name)', { name: `%${name}%` });
    }

    if (category) {
      query.andWhere('skill.category = :category', { category });
    }

    const skills = await query.select(['skill.id', 'skill.name', 'skill.category', 'skill.description'])
      .getMany();

    return res.json({ skills });
  });

  getPopularSkills = asyncHandler(async (_req: AuthRequest, res: Response) => {
    const skills = await this.skillRepository
      .createQueryBuilder('skill')
      .leftJoin('skill.jobSeekers', 'jobSeeker')
      .select('skill.id, skill.name, skill.category, COUNT(jobSeeker.id) as userCount')
      .groupBy('skill.id')
      .orderBy('userCount', 'DESC')
      .limit(10)
      .getRawMany();

    return res.json({ skills });
  });
} 