import { Request } from 'express';
import { JobSeeker } from '../entities/job-seeker.entity';
import { Employer } from '../entities/employer.entity';

export interface AuthRequest extends Request {
  user?: JobSeeker | Employer;
} 