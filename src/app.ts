import express from 'express';
import db from './models';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import { authenticate, authorize } from './middleware/authMiddleware';
import organizationRoutes from './routes/organization/index';
import customerRoutes from './routes/customer/index';
import sowRoutes from './routes/sow';
import sowPaymentPlanRoutes from './routes/sowPaymentPlan';
import sowPaymentPlanLineItemRoutes from './routes/sowPaymentPlanLineItem';
import invoiceRoutes from './routes/invoice';
import invoiceLineItemRoutes from './routes/invoiceLineItem';
import paymentRoutes from './routes/payment';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Invoice Management System API');
});

app.use('/auth', authRoutes);

// Protect the following routes
app.use('/organizations', authenticate, authorize(['admin', 'user']), organizationRoutes);
app.use('/customers', authenticate, authorize(['admin', 'user']), customerRoutes);
app.use('/sows', authenticate, authorize(['admin', 'user']), sowRoutes);
app.use('/sowPaymentPlans', authenticate, authorize(['admin', 'user']), sowPaymentPlanRoutes);
app.use('/sowPaymentPlanLineItems', authenticate, authorize(['admin', 'user']), sowPaymentPlanLineItemRoutes);
app.use('/invoices', authenticate, authorize(['admin', 'user']), invoiceRoutes);
app.use('/invoiceLineItems', authenticate, authorize(['admin', 'user']), invoiceLineItemRoutes);
app.use('/payments', authenticate, authorize(['admin', 'user']), paymentRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
