import { Router } from 'express';
import { getDashboard, login, signup } from '../controllers/authController';
import { checkAuthenticated } from '../utils/middlewares';

export const authRouter = Router();
authRouter.post('/', checkAuthenticated);
authRouter.post('/login', login);
// authRouter.get('/logout');
authRouter.get('/user/:id', getDashboard);
// authRouter.post('/user:id/delete');
authRouter.post('/signup', signup);

export default authRouter;
