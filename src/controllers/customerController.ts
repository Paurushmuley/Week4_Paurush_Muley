import { Request, Response } from 'express';
import db from '../models';

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await db.Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await db.Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.Customer.update(req.body, { where: { id } });
    res.status(200).json({ message: 'Customer updated successfully' });
  } catch (error) {
    res.status(500).json({ error});
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.Customer.destroy({ where: { id } });
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
