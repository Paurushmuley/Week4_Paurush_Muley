import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface SOWAttributes {
  id: number;
  invoiceEmailAddresses: string;
  customerId: number;
  customerPONumber: string;
  title: string;
  customerSONumber: string;
  validityPeriod: string;
  totalValue: number;
  currency: string;
  isApproved: boolean;
}

interface SOWCreationAttributes extends Optional<SOWAttributes, 'id'> {}

class SOW extends Model<SOWAttributes, SOWCreationAttributes> implements SOWAttributes {
  public id!: number;
  public invoiceEmailAddresses!: string;
  public customerId!: number;
  public customerPONumber!: string;
  public title!: string;
  public customerSONumber!: string;
  public validityPeriod!: string;
  public totalValue!: number;
  public currency!: string;
  public isApproved!: boolean;
}

SOW.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    invoiceEmailAddresses: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customerPONumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerSONumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    validityPeriod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isApproved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'sows',
  }
);

export default SOW;
