import { Request, Response } from 'express';
import db from '../models';

export const createSOWPaymentPlanLineItem = async (req: Request, res: Response) => {
  try {
    const sowPaymentPlanLineItem = await db.SOWPaymentPlanLineItem.create(req.body);
    res.status(201).json(sowPaymentPlanLineItem);
  } catch (error) {
    res.status(500).json({ error: error});
  }
};

export const getSOWPaymentPlanLineItems = async (req: Request, res: Response) => {
  try {
    const sowPaymentPlanLineItems = await db.SOWPaymentPlanLineItem.findAll();
    res.status(200).json(sowPaymentPlanLineItems);
  } catch (error) {
    res.status(500).json({ error: error});
  }
};

export const updateSOWPaymentPlanLineItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.SOWPaymentPlanLineItem.update(req.body, { where: { id } });
    res.status(200).json({ message: 'SOW Payment Plan LineItem updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteSOWPaymentPlanLineItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.SOWPaymentPlanLineItem.destroy({ where: { id } });
    res.status(200).json({ message: 'SOW Payment Plan LineItem deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
