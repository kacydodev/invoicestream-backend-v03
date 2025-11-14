import { Router } from 'express';
import {
  getInvoices,
  getStatus,
  updateInvoice,
} from '../controllers/invoiceController';

const invoiceRouter = Router();
invoiceRouter.get('/', getInvoices);
invoiceRouter.get('/status', getStatus);
invoiceRouter.put('/update', updateInvoice);

export default invoiceRouter;
