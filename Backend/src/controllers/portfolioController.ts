import { Request, Response } from 'express';
import { Portfolio} from '../entities/Portfolio';
import { User } from '../entities/User';
import { AppDataSource } from '../data-source';
import asyncHandler from '../middleware/asyncHandler';

const portfolioRepository = AppDataSource.getRepository(Portfolio);
const userRepository = AppDataSource.getRepository(User);

export const getPortfolio = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const portfolio = await portfolioRepository.findOne({
      where: { user: { id: userId } },
    });

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolio', error });
  }
});

export const createOrUpdatePortfolio = asyncHandler(async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const { projects, experience, education } = req.body;

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let portfolio = await portfolioRepository.findOne({
      where: { user: { id: userId } },
    });

    if (!portfolio) {
      portfolio = new Portfolio();
      portfolio.user = user;
    }

    if (projects) portfolio.projects = projects;
    if (experience) portfolio.experience = experience;
    if (education) portfolio.education = education;

    await portfolioRepository.save(portfolio);
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Error saving portfolio', error });
  }
});

export const deletePortfolio =asyncHandler( async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    await portfolioRepository.delete({ user: { id: userId } });
    res.json({ message: 'Portfolio deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting portfolio', error });
  }
});