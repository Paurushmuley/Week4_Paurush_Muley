import { Request, Response } from 'express';
import db from '../models';

export const createInvoiceLineItem = async (req: Request, res: Response) => {
  try {
    const invoiceLineItem = await db.InvoiceLineItem.create(req.body);
    res.status(201).json(invoiceLineItem);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getInvoiceLineItems = async (req: Request, res: Response) => {
  try {
    const invoiceLineItems = await db.InvoiceLineItem.findAll();
    res.status(200).json(invoiceLineItems);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateInvoiceLineItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.InvoiceLineItem.update(req.body, { where: { id } });
    res.status(200).json({ message: 'Invoice Line Item updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error });
}
};

export const deleteInvoiceLineItem = async (req: Request, res: Response) => {
try {
  const { id } = req.params;
  await db.InvoiceLineItem.destroy({ where: { id } });
  res.status(200).json({ message: 'Invoice Line Item deleted successfully' });
} catch (error) {
  res.status(500).json({ error: error });
}
};

