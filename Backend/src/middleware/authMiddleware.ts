import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const authenticate = (req: Request, res: Response, next: NextFunction):void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
     res.status(401).json({ message: 'No token, authorization denied' });
     return
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    (req as any).user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const userRole = (req as any).user.role;
    
    if (!roles.includes(userRole)) {
      res.status(403).json({ message: 'Unauthorized access' });
    }
    
    next();
  };
};