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
exports.deleteInvoice = exports.updateInvoice = exports.getInvoices = exports.createInvoice = void 0;
const models_1 = __importDefault(require("../models"));
const createInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield models_1.default.Invoice.create(req.body);
        res.status(201).json(invoice);
    }
    catch (error) {
        res.status(500).json({ error: error });
        console.log(error);
    }
});
exports.createInvoice = createInvoice;
const getInvoices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield models_1.default.Invoice.findAll();
        res.status(200).json(invoices);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getInvoices = getInvoices;
const updateInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.Invoice.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Invoice updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.updateInvoice = updateInvoice;
const deleteInvoice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.Invoice.destroy({ where: { id } });
        res.status(200).json({ message: 'Invoice deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.deleteInvoice = deleteInvoice;
//# sourceMappingURL=invoiceController.js.map