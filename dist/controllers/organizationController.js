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
exports.deleteOrganization = exports.updateOrganization = exports.getOrganizations = exports.createOrganization = void 0;
const models_1 = __importDefault(require("../models"));
const createOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield models_1.default.Organization.create(req.body);
        res.status(201).json(organization);
    }
    catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
});
exports.createOrganization = createOrganization;
const getOrganizations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizations = yield models_1.default.Organization.findAll();
        res.status(200).json(organizations);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getOrganizations = getOrganizations;
const updateOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.Organization.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Organization updated successfully' });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.updateOrganization = updateOrganization;
const deleteOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield models_1.default.Organization.destroy({ where: { id } });
        res.status(200).json({ message: 'Organization deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.deleteOrganization = deleteOrganization;
//# sourceMappingURL=organizationController.js.map