import { Router } from 'express';
import { createInvoiceLineItem, getInvoiceLineItems, updateInvoiceLineItem, deleteInvoiceLineItem } from '../../controllers/invoiceLineItemController';

const router = Router();

router.post('/', createInvoiceLineItem);
router.get('/', getInvoiceLineItems);
router.put('/:id', updateInvoiceLineItem);
router.delete('/:id', deleteInvoiceLineItem);

export default router;
