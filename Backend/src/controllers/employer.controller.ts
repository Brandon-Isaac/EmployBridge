import { Response } from 'express';
import { getRepository } from 'typeorm';
import { Employer } from '../entities/employer.entity';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { validate } from 'class-validator';
import { asyncHandler } from '../middleware/async-handler';
import { AuthRequest } from '../types/auth-request.interface';

export class EmployerController {
  private get employerRepository() {
    return getRepository(Employer);
  }

  private setAuthCookie(res: Response, token: string) {
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });
  }

  register = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { firstName, lastName, email, password, position, department } = req.body;

    // Check if user already exists
    const existingUser = await this.employerRepository.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new employer
    const employer = this.employerRepository.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      position,
      department,
    });

    // Validate entity
    const errors = await validate(employer);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // Save employer
    await this.employerRepository.save(employer);

    // Generate JWT token
    const token = jwt.sign(
      { id: employer.id, email: employer.email, role: 'EMPLOYER' },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Set auth cookie
    this.setAuthCookie(res, token);

    return res.status(201).json({
      message: 'Employer registered successfully',
      employer: {
        id: employer.id,
        firstName: employer.firstName,
        lastName: employer.lastName,
        email: employer.email,
        position: employer.position,
        department: employer.department,
      },
    });
  });

  login = asyncHandler(async (req: AuthRequest, res: Response) => {
    const { email, password } = req.body;

    // Find user
    const employer = await this.employerRepository.findOne({ where: { email } });
    if (!employer) {
      return res.status(404).json({ message: 'Employer not found' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, employer.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: employer.id, email: employer.email, role: 'EMPLOYER' },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Set auth cookie
    this.setAuthCookie(res, token);

    return res.json({
      message: 'Login successful',
      employer: {
        id: employer.id,
        firstName: employer.firstName,
        lastName: employer.lastName,
        email: employer.email,
        position: employer.position,
        department: employer.department,
      },
    });
  });

  getProfile = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const employer = await this.employerRepository.findOne({
      where: { id: req.user.id },
      relations: ['companies', 'jobPostings']
    });

    if (!employer) {
      return res.status(404).json({ message: 'Employer not found' });
    }

    return res.json({
      employer: {
        id: employer.id,
        firstName: employer.firstName,
        lastName: employer.lastName,
        email: employer.email,
        phone: employer.phone,
        position: employer.position,
        department: employer.department,
        profilePicture: employer.profilePicture,
        companies: employer.companies,
        jobPostings: employer.jobPostings,
      },
    });
  });

  updateProfile = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { firstName, lastName, phone, position, department } = req.body;
    const employer = await this.employerRepository.findOne({
      where: { id: req.user.id }
    });

    if (!employer) {
      return res.status(404).json({ message: 'Employer not found' });
    }

    // Update fields
    if (firstName !== undefined) employer.firstName = firstName;
    if (lastName !== undefined) employer.lastName = lastName;
    if (phone !== undefined) employer.phone = phone;
    if (position !== undefined) employer.position = position;
    if (department !== undefined) employer.department = department;

    // Validate entity
    const errors = await validate(employer);
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    await this.employerRepository.save(employer);

    return res.json({
      message: 'Profile updated successfully',
      employer: {
        id: employer.id,
        firstName: employer.firstName,
        lastName: employer.lastName,
        email: employer.email,
        phone: employer.phone,
        position: employer.position,
        department: employer.department,
      },
    });
  });

  changePassword = asyncHandler(async (req: AuthRequest, res: Response) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { currentPassword, newPassword } = req.body;
    const employer = await this.employerRepository.findOne({
      where: { id: req.user.id }
    });

    if (!employer) {
      return res.status(404).json({ message: 'Employer not found' });
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, employer.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    employer.password = hashedPassword;

    await this.employerRepository.save(employer);

    return res.json({ message: 'Password changed successfully' });
  });

  logout = asyncHandler(async (_req: AuthRequest, res: Response) => {
    res.clearCookie('auth_token');
    return res.json({ message: 'Logged out successfully' });
  });
} 