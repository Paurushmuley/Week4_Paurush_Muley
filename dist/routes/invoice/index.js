"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invoiceController_1 = require("../../controllers/invoiceController");
const router = (0, express_1.Router)();
router.post('/', invoiceController_1.createInvoice);
router.get('/', invoiceController_1.getInvoices);
router.put('/:id', invoiceController_1.updateInvoice);
router.delete('/:id', invoiceController_1.deleteInvoice);
exports.default = router;
//# sourceMappingURL=index.js.map