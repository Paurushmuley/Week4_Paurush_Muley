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
exports.deleteCustomer = exports.updateCustomer = exports.getCustomers = exports.createCustomer = void 0;
const models_1 = __importDefault(require("../models"));
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield models_1.default.Customer.create(req.body);
        res.status(201).json(customer);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.createCustomer = createCustomer;
const getCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield models_1.default.Customer.findAll();
        res.status(200).json(customers);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getCustomers = getCustomers;
const updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.Customer.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Customer updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.updateCustomer = updateCustomer;
const deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.Customer.destroy({ where: { id } });
        res.status(200).json({ message: 'Customer deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.deleteCustomer = deleteCustomer;
//# sourceMappingURL=customerController.js.map