import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import { v4 as uuidv4 } from 'uuid';
interface InvoiceLineItemAttributes {
  id?: string;
  invoiceId: string;
  orderNo: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}

interface InvoiceLineItemCreationAttributes extends Optional<InvoiceLineItemAttributes, 'id'> {}

class InvoiceLineItem extends Model<InvoiceLineItemAttributes, InvoiceLineItemCreationAttributes> implements InvoiceLineItemAttributes {
  public id!: string;
  public invoiceId!: string;;
  public orderNo!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;
}

InvoiceLineItem.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    invoiceId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    orderNo: {
      type: DataTypes.STRING,
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
      type: DataTypes.INTEGER,
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
