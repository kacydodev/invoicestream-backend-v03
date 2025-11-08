import { Request, Response, Router } from 'express';
import invoiceRouter from './invoiceRouter';

const router = Router();

// Routes
router.use('/invoice', invoiceRouter);

// make sure to place this at the end of route handling block
const notFoundHandler = (req: Request, res: Response) => {
  res.status(404);
  res.json({
    message: `${req.method} "${req.originalUrl}" Endpoint not found. Please check with API Document.`,
  });
};
router.use(notFoundHandler);

export default router;
