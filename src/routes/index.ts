import { Request, Response, Router } from 'express';
import invoiceRouter from './invoiceRouter';
import authRouter from './authRouter';

const router = Router();

const indexRouter = (req: Request, res: Response) => {
  res.send('Hello World!');
};

// Routes
router.use('/api/invoice', invoiceRouter);
router.use('/auth', authRouter);
router.use('/', indexRouter);

// make sure to place this at the end of route handling block
const notFoundHandler = (req: Request, res: Response) => {
  res.status(404);
  res.json({
    message: `${req.method} "${req.originalUrl}" Endpoint not found. Please check with API Document.`,
  });
};
router.use(notFoundHandler);

export default router;
