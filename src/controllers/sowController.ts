import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import SOW from '../models/sow'; // Adjust the path as needed

// Create a new SOW
export const createSOW = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id = uuidv4(), ...otherAttributes } = req.body;
    const sow = await SOW.create({ id, ...otherAttributes });
    res.status(201).json(sow);
  } catch (error) {
    res.status(500).json({ error: error});
  }
};


export const getSOWs = async (req: Request, res: Response): Promise<void> => {
  try {
    const sows = await SOW.findAll();
    res.status(200).json(sows);
  } catch (error) {
    res.status(500).json({ error: error});
  }
};


export const getSOWById = async (req: Request, res: Response): Promise<void> => {
  try {
    const sow = await SOW.findByPk(req.params.id);
    if (sow) {
      res.status(200).json(sow);
    } else {
      res.status(404).json({ error: 'SOW not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error});
  }
};


export const updateSOW = async (req: Request, res: Response): Promise<void> => {
  try {
    const [updated] = await SOW.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedSOW = await SOW.findByPk(req.params.id);
      res.status(200).json(updatedSOW);
    } else {
      res.status(404).json({ error: 'SOW not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


export const deleteSOW = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleted = await SOW.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'SOW not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
