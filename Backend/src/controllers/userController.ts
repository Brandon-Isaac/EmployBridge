import { Request, Response } from 'express';
import { User } from '../entities/User';
import { AppDataSource } from '../data-source';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const userRepository = AppDataSource.getRepository(User);
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const registerUser = async (req: Request, res: Response):Promise<void> => {
  try {
    const { name, email, password, role, company, position, bio } = req.body;
    
    // Check if user already exists
    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = hashedPassword;
    user.role = role || 'job_seeker';
    if (company) user.company = company;
    if (position) user.position = position;
    if (bio) user.bio = bio;

    await userRepository.save(user);

    // Generate token
    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

export const loginUser = async (req: Request, res: Response):Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
       res.status(401).json({ message: 'Invalid credentials' });
       return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

export const getUserProfile = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const user = await userRepository.findOne({
      where: { id: userId },
      relations: ['portfolio', 'cv'],
    });

    if (!user) {
       res.status(404).json({ message: 'User not found' });
       return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error });
  }
};

export const updateUserProfile = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const { name, bio, company, position } = req.body;

    const user = await userRepository.findOne({ 
      where: { id: userId },
      relations: ['portfolio', 'cv']
    });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    if (name) user.name = name;
    if (bio) user.bio = bio;
    if (company) user.company = company;
    if (position) user.position = position;

    await userRepository.save(user);

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user profile', error });
  }
};

export const deleteUser = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    await userRepository.delete(userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

export const getAllUsers = async (req: Request, res: Response):Promise<void> => {
  try {
    const users = await userRepository.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

export const getUserById = async (req: Request, res: Response):Promise<void> => {
  try {
    const { id } = req.params;
    const user = await userRepository.findOne({
      where: { id },
      relations: ['portfolio', 'cv'],
    });

    if (!user) {
       res.status(404).json({ message: 'User not found' });
       return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

export const logoutUser = async (req: Request, res: Response):Promise<void> => {
  try {
    // Invalidate the token (if using a token blacklist or similar strategy)
    res.json({ message: 'User logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging out', error });
  }
};
export const updateUserPassword = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const { currentPassword, newPassword } = req.body;

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Current password is incorrect' });
      return;
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;

    await userRepository.save(user);

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating password', error });
  }
}
export const updateUserRole = async (req: Request, res: Response):Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const { role } = req.body;

    const user = await userRepository.findOne({ where: { id: userId } });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    user.role = role;

    await userRepository.save(user);

    res.json({ message: 'User role updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user role', error });
  }
}