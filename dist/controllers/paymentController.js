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
exports.deletePayment = exports.updatePayment = exports.getPayments = exports.createPayment = void 0;
const models_1 = __importDefault(require("../models"));
const createPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield models_1.default.Payment.create(req.body);
        res.status(201).json(payment);
    }
    catch (error) {
        res.status(500).json({ error: error });
        console.log(error);
    }
});
exports.createPayment = createPayment;
const getPayments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payments = yield models_1.default.Payment.findAll();
        res.status(200).json(payments);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getPayments = getPayments;
const updatePayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.Payment.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Payment updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.updatePayment = updatePayment;
const deletePayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.Payment.destroy({ where: { id } });
        res.status(200).json({ message: 'Payment deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.deletePayment = deletePayment;
//# sourceMappingURL=paymentController.js.map