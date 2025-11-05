import e from 'express';
import { getInvoices, getStatus } from '../controllers/apiController';

export const apiRouter = e.Router();
apiRouter.get('/', getStatus);
// apiRouter.get('/clients');

// http localhost:8080/api/invoices
apiRouter.get('/invoices', getInvoices);
