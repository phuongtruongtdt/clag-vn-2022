import payment_methodsRouter from '../routes/payment_methods.route.js';
import clients_infoRouter from '../routes/clients_info.route.js';
import provinces_citiesRouter from '../routes/provinces_cities.route.js';
import transactionsRouter from '../routes/transactions.route.js';
import bank_accountsRouter from '../routes/bank_accounts.route.js';

export default function (app) {
  app.use('/clients', clients_infoRouter);
  app.use('/payment_methods', payment_methodsRouter);
  app.use('/provinces_cities', provinces_citiesRouter);
  app.use('/transactions', transactionsRouter);
  app.use('/bank_accounts', bank_accountsRouter);
}
