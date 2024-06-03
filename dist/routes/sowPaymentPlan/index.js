"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sowPaymentPlanController_1 = require("../../controllers/sowPaymentPlanController");
const router = (0, express_1.Router)();
router.post('/', sowPaymentPlanController_1.createSOWPaymentPlan);
router.get('/', sowPaymentPlanController_1.getSOWPaymentPlans);
router.put('/:id', sowPaymentPlanController_1.updateSOWPaymentPlan);
router.delete('/:id', sowPaymentPlanController_1.deleteSOWPaymentPlan);
exports.default = router;
//# sourceMappingURL=index.js.map