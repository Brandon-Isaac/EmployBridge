import { Request } from 'express';
import { JobSeeker } from '../entities/job-seeker.entity';

export interface AuthRequest extends Request {
  user?: JobSeeker;
} 