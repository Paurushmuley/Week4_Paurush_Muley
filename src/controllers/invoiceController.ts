import { Request, Response } from 'express';
import db from '../models';

export const createInvoice = async (req: Request, res: Response) => {
  try {
    const invoice = await db.Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    res.status(500).json({ error: error });
    console.log(error);
  }
};

export const getInvoices = async (req: Request, res: Response) => {
  try {
    const invoices = await db.Invoice.findAll();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateInvoice = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.Invoice.update(req.body, { where: { id } });
    res.status(200).json({ message: 'Invoice updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteInvoice = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.Invoice.destroy({ where: { id } });
    res.status(200).json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
