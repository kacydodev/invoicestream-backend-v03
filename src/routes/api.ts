import e from 'express';
import {
  getClients,
  getInvoices,
  getStatus,
} from '../controllers/apiController';

export const apiRouter = e.Router();
apiRouter.get('/', getStatus);
// apiRouter.get('/clients');

// http localhost:8080/api/invoices
apiRouter.get('/invoices', getInvoices);

// http localhost:8080/api/clients
apiRouter.get('/clients', getClients);
