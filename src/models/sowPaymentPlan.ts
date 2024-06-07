import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import { v4 as uuidv4 } from 'uuid';

interface SOWPaymentPlanAttributes {
  id?: string;
  sowId: string;
  customerId: string;
  plannedInvoiceDate: Date;
  totalActualAmount: number;
}

interface SOWPaymentPlanCreationAttributes extends Optional<SOWPaymentPlanAttributes, 'id'> {}

class SOWPaymentPlan extends Model<SOWPaymentPlanAttributes, SOWPaymentPlanCreationAttributes> implements SOWPaymentPlanAttributes {
  public id!: string;
  public sowId!: string;
  public customerId!: string;
  public plannedInvoiceDate!: Date;
  public totalActualAmount!: number;
}

SOWPaymentPlan.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    sowId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    plannedInvoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalActualAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'sow_payment_plans',
  }
);

export default SOWPaymentPlan;
