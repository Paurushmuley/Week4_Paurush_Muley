"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Customer extends sequelize_1.Model {
}
Customer.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    organizationId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    msaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    msaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    legalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ndaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ndaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    addressId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    ndaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isNDASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    isMSASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    msaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    tableName: 'customers',
});
exports.default = Customer;
//# sourceMappingURL=customer.js.map