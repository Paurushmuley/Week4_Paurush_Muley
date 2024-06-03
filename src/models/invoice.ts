import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface InvoiceAttributes {
  id: number;
  totalInvoiceValue: number;
  sowId: number;
  status: string;
  sowPaymentPlanId: number;
  invoiceSentOn?: Date | null;
  customerId: number;
  paymentReceivedOn?: Date | null;
  invoiceVersionNumber: number;
  invoiceAmount: number;
  invoiceTaxAmount: number;
}

interface InvoiceCreationAttributes extends Optional<InvoiceAttributes, 'id'> {}

class Invoice extends Model<InvoiceAttributes, InvoiceCreationAttributes> implements InvoiceAttributes {
  public id!: number;
  public totalInvoiceValue!: number;
  public sowId!: number;
  public status!: string;
  public sowPaymentPlanId!: number;
  public invoiceSentOn!: Date | null;
  public customerId!: number;
  public paymentReceivedOn!: Date | null;
  public invoiceVersionNumber!: number;
  public invoiceAmount!: number;
  public invoiceTaxAmount!: number;
}

Invoice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    totalInvoiceValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sowPaymentPlanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invoiceSentOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paymentReceivedOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    invoiceVersionNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invoiceAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    invoiceTaxAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'invoices',
  }
);

export default Invoice;
