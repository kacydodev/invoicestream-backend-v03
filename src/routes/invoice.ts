import e from 'express';
import { getInvoices } from '../controllers/invoiceController';

export const invoiceRouter = e.Router();
invoiceRouter.get('/', getInvoices);
