import { Request, Response } from 'express';
import { Experience, User } from '../src/entities';
import { AppDataSource } from '../data-source';

const experienceRepository = AppDataSource.getRepository(Experience);
const userRepository = AppDataSource.getRepository(User);

export const createExperience = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { title, company, startDate, endDate, current, description } = req.body;

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const experience = new Experience();
    experience.title = title;
    experience.company = company;
    experience.startDate = new Date(startDate);
    if (endDate) experience.endDate = new Date(endDate);
    experience.current = current;
    experience.description = description;
    experience.user = user;

    await experienceRepository.save(experience);
    res.status(201).json(experience);
  } catch (error) {
    res.status(500).json({ message: 'Error creating experience', error });
  }
};

export const getExperiences = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const experiences = await experienceRepository.find({
      where: { user: { id: userId } },
      order: { startDate: 'DESC' },
    });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experiences', error });
  }
};

export const updateExperience = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { id } = req.params;
    const updateData = req.body;

    const experience = await experienceRepository.findOne({
      where: { id, user: { id: userId } },
    });

    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    if (updateData.title) experience.title = updateData.title;
    if (updateData.company) experience.company = updateData.company;
    if (updateData.startDate) experience.startDate = new Date(updateData.startDate);
    if (updateData.endDate) experience.endDate = new Date(updateData.endDate);
    if (updateData.current !== undefined) experience.current = updateData.current;
    if (updateData.description) experience.description = updateData.description;

    await experienceRepository.save(experience);
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: 'Error updating experience', error });
  }
};

export const deleteExperience = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { id } = req.params;

    const result = await experienceRepository.delete({
      id,
      user: { id: userId },
    });

    if (result.affected === 0) {
      return res.status(404).json({ message: 'Experience not found' });
    }

    res.json({ message: 'Experience deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting experience', error });
  }
};