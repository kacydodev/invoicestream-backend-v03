import e from 'express';
import { getClients, getStatus } from '../controllers/apiController';

export const apiRouter = e.Router();
apiRouter.get('/', getStatus);
// apiRouter.get('/clients');

// http localhost:8080/api/clients
apiRouter.get('/clients', getClients);
