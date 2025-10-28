import e from 'express';
import { login, signup } from '../controllers/authController';

export const authRouter = e.Router();
authRouter.post('/signup', signup);
authRouter.post('/login', login);
