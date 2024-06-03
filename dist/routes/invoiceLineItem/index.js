"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invoiceLineItemController_1 = require("../../controllers/invoiceLineItemController");
const router = (0, express_1.Router)();
router.post('/', invoiceLineItemController_1.createInvoiceLineItem);
router.get('/', invoiceLineItemController_1.getInvoiceLineItems);
router.put('/:id', invoiceLineItemController_1.updateInvoiceLineItem);
router.delete('/:id', invoiceLineItemController_1.deleteInvoiceLineItem);
exports.default = router;
//# sourceMappingURL=index.js.map