import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import { v4 as uuidv4 } from 'uuid'; 

interface InvoiceAttributes {
  id?: string ;
  totalInvoiceValue: number;
  sowId: string;
  status: string;
  sowPaymentPlanId: string;
  invoiceSentOn?: Date | null;
  customerId: string;
  paymentReceivedOn?: Date | null;
  invoiceVersionNumber: number;
  invoiceAmount: number;
  invoiceTaxAmount: number;
}

interface InvoiceCreationAttributes extends Optional<InvoiceAttributes, 'id'> {}

class Invoice extends Model<InvoiceAttributes, InvoiceCreationAttributes> implements InvoiceAttributes {
  public id!: string;
  public totalInvoiceValue!: number;
  public sowId!: string;
  public status!: string;
  public sowPaymentPlanId!: string;
  public invoiceSentOn!: Date | null;
  public customerId!: string;
  public paymentReceivedOn!: Date | null;
  public invoiceVersionNumber!: number;
  public invoiceAmount!: number;
  public invoiceTaxAmount!: number;
}

Invoice.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    totalInvoiceValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sowId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sowPaymentPlanId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    invoiceSentOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    customerId: {
      type: DataTypes.UUID,
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invoiceTaxAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'invoices',
  }
);

export default Invoice;
