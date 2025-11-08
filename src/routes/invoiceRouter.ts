import { Router } from 'express';
import { getInvoices, updateInvoice } from '../controllers/invoiceController';

const invoiceRouter = Router();
invoiceRouter.get('/', getInvoices);
invoiceRouter.put('/update', updateInvoice);

export default invoiceRouter;
