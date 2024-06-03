import { Router } from 'express';
import { createInvoice, getInvoices, updateInvoice, deleteInvoice } from '../../controllers/invoiceController';

const router = Router();

router.post('/', createInvoice);
router.get('/', getInvoices);
router.put('/:id', updateInvoice);
router.delete('/:id', deleteInvoice);

export default router;
