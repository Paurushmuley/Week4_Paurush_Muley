import { Router } from 'express';
import { createSOWPaymentPlan, getSOWPaymentPlans, updateSOWPaymentPlan, deleteSOWPaymentPlan } from '../../controllers/sowPaymentPlanController';

const router = Router();

router.post('/', createSOWPaymentPlan);
router.get('/', getSOWPaymentPlans);
router.put('/:id', updateSOWPaymentPlan);
router.delete('/:id', deleteSOWPaymentPlan);

export default router;
