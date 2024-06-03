import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface InvoiceLineItemAttributes {
  id: number;
  invoiceId: number;
  orderNo: number;
  particular: string;
  rate: number;
  unit: string;
  total: number;
}

interface InvoiceLineItemCreationAttributes extends Optional<InvoiceLineItemAttributes, 'id'> {}

class InvoiceLineItem extends Model<InvoiceLineItemAttributes, InvoiceLineItemCreationAttributes> implements InvoiceLineItemAttributes {
  public id!: number;
  public invoiceId!: number;
  public orderNo!: number;
  public particular!: string;
  public rate!: number;
  public unit!: string;
  public total!: number;
}

InvoiceLineItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    invoiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    particular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'invoice_line_items',
  }
);

export default InvoiceLineItem;
