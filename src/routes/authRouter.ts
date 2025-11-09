import { Router } from 'express';
import { signup } from '../controllers/authController';

const authRouter = Router();
// authRouter.post('/login');
// authRouter.get('/logout');
// authRouter.delete('/delete');
authRouter.post('/signup', signup);

export default authRouter;
