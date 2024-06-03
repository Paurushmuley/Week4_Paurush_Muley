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
exports.deleteSOWPaymentPlanLineItem = exports.updateSOWPaymentPlanLineItem = exports.getSOWPaymentPlanLineItems = exports.createSOWPaymentPlanLineItem = void 0;
const models_1 = __importDefault(require("../models"));
const createSOWPaymentPlanLineItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sowPaymentPlanLineItem = yield models_1.default.SOWPaymentPlanLineItem.create(req.body);
        res.status(201).json(sowPaymentPlanLineItem);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.createSOWPaymentPlanLineItem = createSOWPaymentPlanLineItem;
const getSOWPaymentPlanLineItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sowPaymentPlanLineItems = yield models_1.default.SOWPaymentPlanLineItem.findAll();
        res.status(200).json(sowPaymentPlanLineItems);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getSOWPaymentPlanLineItems = getSOWPaymentPlanLineItems;
const updateSOWPaymentPlanLineItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.SOWPaymentPlanLineItem.update(req.body, { where: { id } });
        res.status(200).json({ message: 'SOW Payment Plan LineItem updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.updateSOWPaymentPlanLineItem = updateSOWPaymentPlanLineItem;
const deleteSOWPaymentPlanLineItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.SOWPaymentPlanLineItem.destroy({ where: { id } });
        res.status(200).json({ message: 'SOW Payment Plan LineItem deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.deleteSOWPaymentPlanLineItem = deleteSOWPaymentPlanLineItem;
//# sourceMappingURL=sowPaymentPlanLineItemController.js.map