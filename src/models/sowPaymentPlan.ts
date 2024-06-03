import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface SOWPaymentPlanAttributes {
  id: number;
  sowId: number;
  customerId: number;
  plannedInvoiceDate: Date;
  totalActualAmount: number;
}

interface SOWPaymentPlanCreationAttributes extends Optional<SOWPaymentPlanAttributes, 'id'> {}

class SOWPaymentPlan extends Model<SOWPaymentPlanAttributes, SOWPaymentPlanCreationAttributes> implements SOWPaymentPlanAttributes {
  public id!: number;
  public sowId!: number;
  public customerId!: number;
  public plannedInvoiceDate!: Date;
  public totalActualAmount!: number;
}

SOWPaymentPlan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sowId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
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
