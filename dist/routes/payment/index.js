"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = require("../../controllers/paymentController");
const router = (0, express_1.Router)();
router.post('/', paymentController_1.createPayment);
router.get('/', paymentController_1.getPayments);
router.put('/:id', paymentController_1.updatePayment);
router.delete('/:id', paymentController_1.deletePayment);
exports.default = router;
//# sourceMappingURL=index.js.map