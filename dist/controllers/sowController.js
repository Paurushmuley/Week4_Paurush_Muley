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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSOW = exports.updateSOW = exports.getSOWById = exports.getSOWs = exports.createSOW = void 0;
const uuid_1 = require("uuid");
const sow_1 = __importDefault(require("../models/sow")); // Adjust the path as needed
// Create a new SOW
const createSOW = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { id = (0, uuid_1.v4)() } = _a, otherAttributes = __rest(_a, ["id"]);
        const sow = yield sow_1.default.create(Object.assign({ id }, otherAttributes));
        res.status(201).json(sow);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.createSOW = createSOW;
const getSOWs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sows = yield sow_1.default.findAll();
        res.status(200).json(sows);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getSOWs = getSOWs;
const getSOWById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sow = yield sow_1.default.findByPk(req.params.id);
        if (sow) {
            res.status(200).json(sow);
        }
        else {
            res.status(404).json({ error: 'SOW not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getSOWById = getSOWById;
const updateSOW = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield sow_1.default.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedSOW = yield sow_1.default.findByPk(req.params.id);
            res.status(200).json(updatedSOW);
        }
        else {
            res.status(404).json({ error: 'SOW not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.updateSOW = updateSOW;
const deleteSOW = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield sow_1.default.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: 'SOW not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.deleteSOW = deleteSOW;
//# sourceMappingURL=sowController.js.map