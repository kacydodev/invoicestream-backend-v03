import { Router } from 'express';
import invoiceRouter from './invoiceRouter';

const router = Router();

router.use('/api/invoice', invoiceRouter);

export default router;
