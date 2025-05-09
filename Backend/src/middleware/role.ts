import { Request, Response, NextFunction } from 'express';
import { User, UserRole } from '../entities/User';

// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        role: string;
      };
    }
  }
}

export const isEmployer = (req: Request, res: Response, next: NextFunction): void => {
  const user = req.user;

  if (!user) {
   res.status(401).json({ message: 'Unauthorized - No user found' });
   return;
  }

  if (user.role !== UserRole.EMPLOYER) {
   res.status(403).json({ message: 'Forbidden - Employer access required' });
   return;
  }

  next();
};

export const isJobSeeker = (req: Request, res: Response, next: NextFunction): void => {
  const user = req.user;

  if (!user) {
    res.status(401).json({ message: 'Unauthorized - No user found' });
    return;
  }

  if (user.role !== UserRole.JOB_SEEKER) {
    res.status(403).json({ message: 'Forbidden - Job Seeker access required' });
    return;
  }

  next();
};

