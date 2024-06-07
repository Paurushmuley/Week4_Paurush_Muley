"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class SOWPaymentPlan extends sequelize_1.Model {
}
SOWPaymentPlan.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    sowId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    plannedInvoiceDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    totalActualAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    tableName: 'sow_payment_plans',
});
exports.default = SOWPaymentPlan;
//# sourceMappingURL=sowPaymentPlan.js.map