"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class InvoiceLineItem extends sequelize_1.Model {
}
InvoiceLineItem.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    invoiceId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    orderNo: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    particular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rate: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    unit: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    tableName: 'invoice_line_items',
});
exports.default = InvoiceLineItem;
//# sourceMappingURL=invoiceLineItem.js.map