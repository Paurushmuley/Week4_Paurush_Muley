import { Sequelize } from 'sequelize';
import sequelize from '../config/database';
import User from './user';
import Organization from './organization';
import Customer from './customer';
import SOW from './sow';
import SOWPaymentPlan from './sowPaymentPlan';
import SOWPaymentPlanLineItem from './sowPaymentPlanLineItem';
import Invoice from './invoice';
import InvoiceLineItem from './invoiceLineItem';
import Payment from './payment';

const db: { [key: string]: any } = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Organization = Organization;
db.Customer = Customer;
db.SOW = SOW;
db.SOWPaymentPlan = SOWPaymentPlan;
db.SOWPaymentPlanLineItem = SOWPaymentPlanLineItem;
db.Invoice = Invoice;
db.InvoiceLineItem = InvoiceLineItem;
db.Payment = Payment;

Organization.hasMany(Customer, { foreignKey: 'organizationId' });
Customer.belongsTo(Organization, { foreignKey: 'organizationId' });

Customer.hasMany(SOW, { foreignKey: 'customerId' });
SOW.belongsTo(Customer, { foreignKey: 'customerId' });

SOW.hasMany(SOWPaymentPlan, { foreignKey: 'sowId' });
SOWPaymentPlan.belongsTo(SOW, { foreignKey: 'sowId' });

Customer.hasMany(SOWPaymentPlan, { foreignKey: 'customerId' });
SOWPaymentPlan.belongsTo(Customer, { foreignKey: 'customerId' });

SOWPaymentPlan.hasMany(SOWPaymentPlanLineItem, { foreignKey: 'sowPaymentPlanId' });
SOWPaymentPlanLineItem.belongsTo(SOWPaymentPlan, { foreignKey: 'sowPaymentPlanId' });

SOW.hasMany(SOWPaymentPlanLineItem, { foreignKey: 'sowId' });
SOWPaymentPlanLineItem.belongsTo(SOW, { foreignKey: 'sowId' });

SOWPaymentPlan.hasOne(Invoice, { foreignKey: 'sowPaymentPlanId' });
Invoice.belongsTo(SOWPaymentPlan, { foreignKey: 'sowPaymentPlanId' });

Invoice.hasMany(InvoiceLineItem, { foreignKey: 'invoiceId' });
InvoiceLineItem.belongsTo(Invoice, { foreignKey: 'invoiceId' });

Payment.belongsTo(Invoice, { foreignKey: 'invoiceId' });
Invoice.hasMany(Payment, { foreignKey: 'invoiceId' });

export default db;
