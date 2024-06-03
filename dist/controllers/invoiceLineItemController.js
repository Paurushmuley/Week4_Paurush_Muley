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
exports.deleteInvoiceLineItem = exports.updateInvoiceLineItem = exports.getInvoiceLineItems = exports.createInvoiceLineItem = void 0;
const models_1 = __importDefault(require("../models"));
const createInvoiceLineItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceLineItem = yield models_1.default.InvoiceLineItem.create(req.body);
        res.status(201).json(invoiceLineItem);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.createInvoiceLineItem = createInvoiceLineItem;
const getInvoiceLineItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceLineItems = yield models_1.default.InvoiceLineItem.findAll();
        res.status(200).json(invoiceLineItems);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getInvoiceLineItems = getInvoiceLineItems;
const updateInvoiceLineItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.InvoiceLineItem.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Invoice Line Item updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.updateInvoiceLineItem = updateInvoiceLineItem;
const deleteInvoiceLineItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.InvoiceLineItem.destroy({ where: { id } });
        res.status(200).json({ message: 'Invoice Line Item deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.deleteInvoiceLineItem = deleteInvoiceLineItem;
//# sourceMappingURL=invoiceLineItemController.js.map