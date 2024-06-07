"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class SOW extends sequelize_1.Model {
}
SOW.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    invoiceEmailAddresses: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    customerPONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    customerSONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    validityPeriod: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
    totalValue: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    tableName: 'sows',
});
exports.default = SOW;
//# sourceMappingURL=sow.js.map