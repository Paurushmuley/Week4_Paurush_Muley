import { Request, Response } from 'express';
import db from '../models';

export const createOrganization = async (req: Request, res: Response) => {
  try {
    const organization = await db.Organization.create(req.body);
    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
};

export const getOrganizations = async (req: Request, res: Response) => {
  try {
    const organizations = await db.Organization.findAll();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateOrganization = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.Organization.update(req.body, { where: { id } });
    res.status(200).json({ message: 'Organization updated successfully' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteOrganization = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.Organization.destroy({ where: { id } });
    res.status(200).json({ message: 'Organization deleted successfully' });
  } catch (error) {
    res.status(500).json({ error });
  }
};
