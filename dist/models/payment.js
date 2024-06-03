"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Payment extends sequelize_1.Model {
}
Payment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    paymentDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    forExAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    indianAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    invoiceId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    isFullPayment: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    bankPayment: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    details: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    tableName: 'payments',
});
exports.default = Payment;
//# sourceMappingURL=payment.js.map