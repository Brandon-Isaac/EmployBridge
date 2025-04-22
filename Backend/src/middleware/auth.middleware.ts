import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { JobSeeker } from '../entities/job-seeker.entity';
import { Admin } from '../entities/admin.entity';
import { Employer } from '../entities/employer.entity';

interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your-secret-key'
    ) as { id: string; email: string; role: string };

    if (decoded.role === 'ADMIN') {
      const adminRepository = getRepository(Admin);
      const admin = await adminRepository.findOne({ where: { id: decoded.id } });
      
      if (!admin) {
        return res.status(401).json({ message: 'Admin not found' });
      }

      req.user = admin;
      return next();
    } else if (decoded.role === 'EMPLOYER') {
      const employerRepository = getRepository(Employer);
      const employer = await employerRepository.findOne({ where: { id: decoded.id } });
      
      if (!employer) {
        return res.status(401).json({ message: 'Employer not found' });
      }

      req.user = employer;
      return next();
    } else {
      const jobSeekerRepository = getRepository(JobSeeker);
      const jobSeeker = await jobSeekerRepository.findOne({ where: { id: decoded.id } });

      if (!jobSeeker) {
        return res.status(401).json({ message: 'User not found' });
      }

      req.user = jobSeeker;
      return next();
    }
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}; 