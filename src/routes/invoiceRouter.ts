import { Router } from 'express';
import {
  getInvoice,
  deleteInvoice,
  getInvoices,
  updateInvoice,
} from '../controllers/invoiceController';

const invoiceRouter = Router();
invoiceRouter.get('/', getInvoices);
invoiceRouter.get('/:id', getInvoice);
invoiceRouter.put('/update', updateInvoice);
invoiceRouter.delete('/:id', deleteInvoice);

export default invoiceRouter;
