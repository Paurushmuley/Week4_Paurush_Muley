import { Request, Response } from 'express';
import db from '../models';

export const createSOWPaymentPlan = async (req: Request, res: Response) => {
  try {
    const sowPaymentPlan = await db.SOWPaymentPlan.create(req.body);
    res.status(201).json(sowPaymentPlan);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getSOWPaymentPlans = async (req: Request, res: Response) => {
  try {
    const sowPaymentPlans = await db.SOWPaymentPlan.findAll();
    res.status(200).json(sowPaymentPlans);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateSOWPaymentPlan = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.SOWPaymentPlan.update(req.body, { where: { id } });
    res.status(200).json({ message: 'SOW Payment Plan updated successfully' });
  } catch (error) {
    res.status(500).json({ error});
  }
};

export const deleteSOWPaymentPlan = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.SOWPaymentPlan.destroy({ where: { id } });
    res.status(200).json({ message: 'SOW Payment Plan deleted successfully' });
  } catch (error) {
    res.status (500).json({ error});
  }
};
