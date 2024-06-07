import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import { v4 as uuidv4 } from 'uuid';

interface PaymentAttributes {
  id?: string ;
  paymentDate: Date;
  forExAmount: number;
  currency: string;
  indianAmount: number;
  invoiceId: string;
  isFullPayment: boolean;
  bankPayment: boolean;
  details: string;
}

interface PaymentCreationAttributes extends Optional<PaymentAttributes, 'id'> {}

class Payment extends Model<PaymentAttributes, PaymentCreationAttributes> implements PaymentAttributes {
  public id!: string;
  public paymentDate!: Date;
  public forExAmount!: number;
  public currency!: string;
  public indianAmount!: number;
  public invoiceId!: string;
  public isFullPayment!: boolean;
  public bankPayment!: boolean;
  public details!: string;
}

Payment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    forExAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    indianAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    invoiceId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    isFullPayment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    bankPayment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'payments',
  }
);

export default Payment;
