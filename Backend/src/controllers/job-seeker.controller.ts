import {  Response } from 'express';
import { getRepository } from 'typeorm';
import { JobSeeker } from '../entities/job-seeker.entity';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { validate } from 'class-validator';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class JobSeekerController {
  private get jobSeekerRepository() {
    return getRepository(JobSeeker);
  }

  register = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await this.jobSeekerRepository.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new job seeker
    const jobSeeker = this.jobSeekerRepository.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Validate entity
    const errors = await validate(jobSeeker);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // Save job seeker
    await this.jobSeekerRepository.save(jobSeeker);

    // Generate JWT token
    const token = jwt.sign(
      { id: jobSeeker.id, email: jobSeeker.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    return res.status(201).json({
      message: 'Job seeker registered successfully',
      token,
      jobSeeker: {
        id: jobSeeker.id,
        firstName: jobSeeker.firstName,
        lastName: jobSeeker.lastName,
        email: jobSeeker.email,
      },
    });
  });

  login = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { email, password } = req.body;

    // Find user
    const jobSeeker = await this.jobSeekerRepository.findOne({ where: { email } });
    if (!jobSeeker) {
     return res.status(404).json({ message: 'Job seeker not found' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, jobSeeker.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: jobSeeker.id, email: jobSeeker.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    return res.json({
      message: 'Login successful',
      token,
      jobSeeker: {
        id: jobSeeker.id,
        firstName: jobSeeker.firstName,
        lastName: jobSeeker.lastName,
        email: jobSeeker.email,
      },
    });
  });

  getProfile = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id },
      relations: ['skills', 'portfolios', 'cvs']
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    return res.json({
      jobSeeker: {
        id: jobSeeker.id,
        firstName: jobSeeker.firstName,
        lastName: jobSeeker.lastName,
        email: jobSeeker.email,
        phone: jobSeeker.phone,
        location: jobSeeker.location,
        bio: jobSeeker.bio,
        profilePicture: jobSeeker.profilePicture,
        skills: jobSeeker.skills,
        portfolios: jobSeeker.portfolios,
        cvs: jobSeeker.cvs,
        applications: jobSeeker.applications,
      },
    });
  });

  updateProfile = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { firstName, lastName, phone, location, bio } = req.body;
    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id }
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    // Update fields
    jobSeeker.firstName = firstName || jobSeeker.firstName;
    jobSeeker.lastName = lastName || jobSeeker.lastName;
    jobSeeker.phone = phone || jobSeeker.phone;
    jobSeeker.location = location || jobSeeker.location;
    jobSeeker.bio = bio || jobSeeker.bio;

    // Validate entity
    const errors = await validate(jobSeeker);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await this.jobSeekerRepository.save(jobSeeker);

   return res.json({
      message: 'Profile updated successfully',
      jobSeeker: {
        id: jobSeeker.id,
        firstName: jobSeeker.firstName,
        lastName: jobSeeker.lastName,
        email: jobSeeker.email,
        phone: jobSeeker.phone,
        location: jobSeeker.location,
        bio: jobSeeker.bio,
      },
    });
  });

  changePassword = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { currentPassword, newPassword } = req.body;
    const jobSeeker = await this.jobSeekerRepository.findOne({
      where: { id: req.user.id }
    });

    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, jobSeeker.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    jobSeeker.password = hashedPassword;

    await this.jobSeekerRepository.save(jobSeeker);

    return res.json({ message: 'Password changed successfully' });
  });
} 