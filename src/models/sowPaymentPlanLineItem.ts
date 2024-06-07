import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import { v4 as uuidv4 } from 'uuid';

interface SOWPaymentPlanLineItemAttributes {
  id?: string;
  sowPaymentPlanId: string;
  sowId: string;
  orderId: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}

interface SOWPaymentPlanLineItemCreationAttributes extends Optional<SOWPaymentPlanLineItemAttributes, 'id'> {}

class SOWPaymentPlanLineItem extends Model<SOWPaymentPlanLineItemAttributes, SOWPaymentPlanLineItemCreationAttributes> implements SOWPaymentPlanLineItemAttributes {
  public id!: string;
  public sowPaymentPlanId!: string;
  public sowId!: string;
  public orderId!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;
}

SOWPaymentPlanLineItem.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    sowPaymentPlanId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    sowId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    orderId: {
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
