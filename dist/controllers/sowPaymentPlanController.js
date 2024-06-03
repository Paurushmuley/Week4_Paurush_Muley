"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSOWPaymentPlan = exports.updateSOWPaymentPlan = exports.getSOWPaymentPlans = exports.createSOWPaymentPlan = void 0;
const models_1 = __importDefault(require("../models"));
const createSOWPaymentPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sowPaymentPlan = yield models_1.default.SOWPaymentPlan.create(req.body);
        res.status(201).json(sowPaymentPlan);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.createSOWPaymentPlan = createSOWPaymentPlan;
const getSOWPaymentPlans = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sowPaymentPlans = yield models_1.default.SOWPaymentPlan.findAll();
        res.status(200).json(sowPaymentPlans);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getSOWPaymentPlans = getSOWPaymentPlans;
const updateSOWPaymentPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.SOWPaymentPlan.update(req.body, { where: { id } });
        res.status(200).json({ message: 'SOW Payment Plan updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.updateSOWPaymentPlan = updateSOWPaymentPlan;
const deleteSOWPaymentPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.SOWPaymentPlan.destroy({ where: { id } });
        res.status(200).json({ message: 'SOW Payment Plan deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.deleteSOWPaymentPlan = deleteSOWPaymentPlan;
//# sourceMappingURL=sowPaymentPlanController.js.map