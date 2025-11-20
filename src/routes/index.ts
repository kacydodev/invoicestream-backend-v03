import { Request, Response, Router } from 'express';
import invoiceRouter from './invoiceRouter';
import { Status } from '../generated/prisma/enums';

const router = Router();

// Routes
router.use('/invoice', invoiceRouter);
router.use('/status', function (req, res) {
  const status = Object.keys(Status);
  res.send(status);
});

// make sure to place this at the end of route handling block
const notFoundHandler = (req: Request, res: Response) => {
  res.status(404);
  res.json({
    message: `${req.method} "${req.originalUrl}" Endpoint not found. Please check with API Document.`,
  });
};
router.use(notFoundHandler);

export default router;
