import { Router } from 'express';
import { createSOWPaymentPlanLineItem, getSOWPaymentPlanLineItems, updateSOWPaymentPlanLineItem, deleteSOWPaymentPlanLineItem } from '../../controllers/sowPaymentPlanLineItemController';

const router = Router();

router.post('/', createSOWPaymentPlanLineItem);
router.get('/', getSOWPaymentPlanLineItems);
router.put('/:id', updateSOWPaymentPlanLineItem);
router.delete('/:id', deleteSOWPaymentPlanLineItem);

export default router;
