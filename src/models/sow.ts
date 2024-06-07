import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface ValidityPeriod {
  validFrom: Date;
  validUpto: Date;
}

interface SOWAttributes {
  id: string;
  invoiceEmailAddresses: string[];
  customerId: string;  // Changed to string if it should not be a UUID
  customerPONumber: string;
  title: string;
  customerSONumber: string;
  validityPeriod: ValidityPeriod;
  totalValue: number;
  currency: string;
}

interface SOWCreationAttributes extends Optional<SOWAttributes, 'id'> {}

class SOW extends Model<SOWAttributes, SOWCreationAttributes> implements SOWAttributes {
  public id!: string;
  public invoiceEmailAddresses!: string[];
  public customerId!: string;
  public customerPONumber!: string;
  public title!: string;
  public customerSONumber!: string;
  public validityPeriod!: ValidityPeriod;
  public totalValue!: number;
  public currency!: string;
}

SOW.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    invoiceEmailAddresses: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    customerId: {
      type: DataTypes.UUID,
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
      type: DataTypes.JSONB,
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
  },
  {
    sequelize,
    tableName: 'sows',
  }
);

export default SOW;
