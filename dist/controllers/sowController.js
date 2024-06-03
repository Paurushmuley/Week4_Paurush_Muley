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
exports.deleteSOW = exports.updateSOW = exports.getSOWs = exports.createSOW = void 0;
const models_1 = __importDefault(require("../models"));
const createSOW = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sow = yield models_1.default.SOW.create(req.body);
        res.status(201).json(sow);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.createSOW = createSOW;
const getSOWs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sows = yield models_1.default.SOW.findAll();
        res.status(200).json(sows);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getSOWs = getSOWs;
const updateSOW = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.SOW.update(req.body, { where: { id } });
        res.status(200).json({ message: 'SOW updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.updateSOW = updateSOW;
const deleteSOW = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.SOW.destroy({ where: { id } });
        res.status(200).json({ message: 'SOW deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.deleteSOW = deleteSOW;
//# sourceMappingURL=sowController.js.map