import { Router } from 'express';
import { register, login, invite } from '../../controllers/authController';
import { authenticate, authorize } from '../../middleware/authMiddleware';
import db from '../../models';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/invite', authenticate, authorize(['admin']), invite);

export default router;
