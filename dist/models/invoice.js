"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Invoice extends sequelize_1.Model {
}
Invoice.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    totalInvoiceValue: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    sowId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sowPaymentPlanId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    invoiceSentOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    paymentReceivedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    invoiceVersionNumber: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    invoiceAmount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    invoiceTaxAmount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    tableName: 'invoices',
});
exports.default = Invoice;
//# sourceMappingURL=invoice.js.map