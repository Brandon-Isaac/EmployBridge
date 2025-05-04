import { Request, Response } from 'express';
import { Education } from '../entities/Education';
import { User } from '../entities/User';
import { AppDataSource } from '../data-source';

const educationRepository = AppDataSource.getRepository(Education);
const userRepository = AppDataSource.getRepository(User);

export const createEducation = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const { institution, degree, fieldOfStudy, startDate, endDate, current, description } = req.body;

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
       res.status(404).json({ message: 'User not found' });
        return;
    }

    const education = new Education();
    education.institution = institution;
    education.degree = degree;
    education.fieldOfStudy = fieldOfStudy;
    education.startDate = new Date(startDate);
    if (endDate) education.endDate = new Date(endDate);
    education.current = current;
    if (description) education.description = description;
    education.user = user;

    await educationRepository.save(education);
    res.status(201).json(education);
  } catch (error) {
    res.status(500).json({ message: 'Error creating education', error });
  }
};

export const getEducations = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = req.params.userId;
    const educations = await educationRepository.find({
      where: { user: { id: userId } },
      order: { startDate: 'DESC' },
    });
    res.json(educations);
    return
  } catch (error) {
    res.status(500).json({ message: 'Error fetching educations', error });
  }
};

export const updateEducation = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const { id } = req.params;
    const updateData = req.body;

    const education = await educationRepository.findOne({
      where: { id, user: { id: userId } },
    });

    if (!education) {
      res.status(404).json({ message: 'Education not found' });
      return
    }

    if (updateData.institution) education.institution = updateData.institution;
    if (updateData.degree) education.degree = updateData.degree;
    if (updateData.fieldOfStudy) education.fieldOfStudy = updateData.fieldOfStudy;
    if (updateData.startDate) education.startDate = new Date(updateData.startDate);
    if (updateData.endDate) education.endDate = new Date(updateData.endDate);
    if (updateData.current !== undefined) education.current = updateData.current;
    if (updateData.description) education.description = updateData.description;

    await educationRepository.save(education);
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: 'Error updating education', error });
  }
};

export const deleteEducation = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const { id } = req.params;

    const result = await educationRepository.delete({
      id,
      user: { id: userId },
    });

    if (result.affected === 0) {
      res.status(404).json({ message: 'Education not found' });
      return;
    }

    res.json({ message: 'Education deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting education', error });
  }
};