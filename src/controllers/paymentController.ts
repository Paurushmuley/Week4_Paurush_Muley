import { Request, Response } from 'express';
import db from '../models';

export const createPayment = async (req: Request, res: Response) => {
  try {
    const payment = await db.Payment.create(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: error });
    console.log(error);
  }
};

export const getPayments = async (req: Request, res: Response) => {
  try {
    const payments = await db.Payment.findAll();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatePayment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.Payment.update(req.body, { where: { id } });
    res.status(200).json({ message: 'Payment updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deletePayment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.Payment.destroy({ where: { id } });
    res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
