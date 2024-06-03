"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customerController_1 = require("../../controllers/customerController");
const router = (0, express_1.Router)();
router.post('/', customerController_1.createCustomer);
router.get('/', customerController_1.getCustomers);
router.put('/:id', customerController_1.updateCustomer);
router.delete('/:id', customerController_1.deleteCustomer);
exports.default = router;
//# sourceMappingURL=index.js.map