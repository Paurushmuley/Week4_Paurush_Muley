import { Router } from 'express';
import { createSOW, getSOWs, updateSOW, deleteSOW } from '../../controllers/sowController';

const router = Router();

router.post('/', createSOW);
router.get('/', getSOWs);
router.put('/:id', updateSOW);
router.delete('/:id', deleteSOW);

export default router;
