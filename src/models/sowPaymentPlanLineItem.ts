import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface SOWPaymentPlanLineItemAttributes {
  id: number;
  sowPaymentPlanId: number;
  sowId: number;
  orderId: number;
  particular: string;
  rate: number;
  unit: string;
  total: number;
}

interface SOWPaymentPlanLineItemCreationAttributes extends Optional<SOWPaymentPlanLineItemAttributes, 'id'> {}

class SOWPaymentPlanLineItem extends Model<SOWPaymentPlanLineItemAttributes, SOWPaymentPlanLineItemCreationAttributes> implements SOWPaymentPlanLineItemAttributes {
  public id!: number;
  public sowPaymentPlanId!: number;
  public sowId!: number;
  public orderId!: number;
  public particular!: string;
  public rate!: number;
  public unit!: string;
  public total!: number;
}

SOWPaymentPlanLineItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sowPaymentPlanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderId: {
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
    tableName: 'sow_payment_plan_line_items',
  }
);

export default SOWPaymentPlanLineItem;
