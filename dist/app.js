"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("./models"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./routes/auth"));
const authMiddleware_1 = require("./middleware/authMiddleware");
const index_1 = __importDefault(require("./routes/organization/index"));
const index_2 = __importDefault(require("./routes/customer/index"));
const sow_1 = __importDefault(require("./routes/sow"));
const sowPaymentPlan_1 = __importDefault(require("./routes/sowPaymentPlan"));
const sowPaymentPlanLineItem_1 = __importDefault(require("./routes/sowPaymentPlanLineItem"));
const invoice_1 = __importDefault(require("./routes/invoice"));
const invoiceLineItem_1 = __importDefault(require("./routes/invoiceLineItem"));
const payment_1 = __importDefault(require("./routes/payment"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Invoice Management System API');
});
app.use('/auth', auth_1.default);
// Protect the following routes
app.use('/organizations', authMiddleware_1.authenticate, (0, authMiddleware_1.authorize)(['admin', 'user']), index_1.default);
app.use('/customers', authMiddleware_1.authenticate, (0, authMiddleware_1.authorize)(['admin', 'user']), index_2.default);
app.use('/sows', authMiddleware_1.authenticate, (0, authMiddleware_1.authorize)(['admin', 'user']), sow_1.default);
app.use('/sowPaymentPlans', authMiddleware_1.authenticate, (0, authMiddleware_1.authorize)(['admin', 'user']), sowPaymentPlan_1.default);
app.use('/sowPaymentPlanLineItems', authMiddleware_1.authenticate, (0, authMiddleware_1.authorize)(['admin', 'user']), sowPaymentPlanLineItem_1.default);
app.use('/invoices', authMiddleware_1.authenticate, (0, authMiddleware_1.authorize)(['admin', 'user']), invoice_1.default);
app.use('/invoiceLineItems', authMiddleware_1.authenticate, (0, authMiddleware_1.authorize)(['admin', 'user']), invoiceLineItem_1.default);
app.use('/payments', authMiddleware_1.authenticate, (0, authMiddleware_1.authorize)(['admin', 'user']), payment_1.default);
models_1.default.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
//# sourceMappingURL=app.js.map