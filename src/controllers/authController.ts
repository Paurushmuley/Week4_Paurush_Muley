import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import db from '../models';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    const user = await db.User.create({ email, password, role });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({ where: { email } });
    if (!user || !(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const invite = async (req: Request, res: Response) => {
    try {
      const { email, role } = req.body;
  
      if (!email || !role) {
        return res.status(400).json({ error: 'Email and role are required' });
      }
  

      const existingUser = await db.User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
  
      const temporaryPassword = 'temporaryPassword';
      const user = await db.User.create({ email, password: temporaryPassword, role });
  
      
  
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
  