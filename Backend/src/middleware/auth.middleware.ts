import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { JobSeeker } from '../entities/job-seeker.entity';

interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-secret-key'
    ) as { id: string; email: string };

    const jobSeekerRepository = getRepository(JobSeeker);
    const jobSeeker = await jobSeekerRepository.findOne({ where: { id: decoded.id } });

    if (!jobSeeker) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = jobSeeker;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}; 