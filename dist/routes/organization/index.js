"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organizationController_1 = require("../../controllers/organizationController");
const router = (0, express_1.Router)();
router.post('/', organizationController_1.createOrganization);
router.get('/', organizationController_1.getOrganizations);
router.put('/:id', organizationController_1.updateOrganization);
router.delete('/:id', organizationController_1.deleteOrganization);
exports.default = router;
//# sourceMappingURL=index.js.map