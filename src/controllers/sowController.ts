import { Request, Response } from 'express';
import db from '../models';

export const createSOW = async (req: Request, res: Response) => {
  try {
    const sow = await db.SOW.create(req.body);
    res.status(201).json(sow);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getSOWs = async (req: Request, res: Response) => {
  try {
    const sows = await db.SOW.findAll();
    res.status(200).json(sows);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateSOW = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.SOW.update(req.body, { where: { id } });
    res.status(200).json({ message: 'SOW updated successfully' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteSOW = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.SOW.destroy({ where: { id } });
    res.status(200).json({ message: 'SOW deleted successfully' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
