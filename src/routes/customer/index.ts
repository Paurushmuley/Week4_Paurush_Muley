import { Router } from 'express';
import { createCustomer, getCustomers, updateCustomer, deleteCustomer } from '../../controllers/customerController';

const router = Router();

router.post('/', createCustomer);
router.get('/', getCustomers);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;
