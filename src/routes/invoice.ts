import e from 'express';
import { getInvoices, updateInvoice } from '../controllers/invoiceController';

export const invoiceRouter = e.Router();
invoiceRouter.get('/', getInvoices);
invoiceRouter.put('/update', updateInvoice);
