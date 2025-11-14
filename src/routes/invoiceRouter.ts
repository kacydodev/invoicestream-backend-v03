import { Router } from 'express';
import {
  getInvoice,
  getInvoices,
  getStatus,
  updateInvoice,
} from '../controllers/invoiceController';

const invoiceRouter = Router();
invoiceRouter.get('/', getInvoices);
invoiceRouter.get('/:id', getInvoice);
invoiceRouter.get('/status', getStatus);
invoiceRouter.put('/update', updateInvoice);

export default invoiceRouter;
