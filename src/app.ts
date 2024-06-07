import express from 'express';
import db from './models';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
// import { authenticate, authorize } from './middleware/authMiddleware';
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

// app.use('/auth', authRoutes);


app.use('/organizations', organizationRoutes);
app.use('/customers', customerRoutes);
app.use('/sows', sowRoutes);
app.use('/sowPaymentPlans', sowPaymentPlanRoutes);
app.use('/sowPaymentPlanLineItems', sowPaymentPlanLineItemRoutes);
app.use('/invoices', invoiceRoutes);
app.use('/invoiceLineItems', invoiceLineItemRoutes);
app.use('/payments', paymentRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
