"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sowController_1 = require("../../controllers/sowController");
const router = (0, express_1.Router)();
router.post('/', sowController_1.createSOW);
router.get('/', sowController_1.getSOWs);
router.put('/:id', sowController_1.updateSOW);
router.delete('/:id', sowController_1.deleteSOW);
exports.default = router;
//# sourceMappingURL=index.js.map