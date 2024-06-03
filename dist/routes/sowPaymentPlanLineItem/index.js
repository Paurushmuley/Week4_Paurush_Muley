"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sowPaymentPlanLineItemController_1 = require("../../controllers/sowPaymentPlanLineItemController");
const router = (0, express_1.Router)();
router.post('/', sowPaymentPlanLineItemController_1.createSOWPaymentPlanLineItem);
router.get('/', sowPaymentPlanLineItemController_1.getSOWPaymentPlanLineItems);
router.put('/:id', sowPaymentPlanLineItemController_1.updateSOWPaymentPlanLineItem);
router.delete('/:id', sowPaymentPlanLineItemController_1.deleteSOWPaymentPlanLineItem);
exports.default = router;
//# sourceMappingURL=index.js.map