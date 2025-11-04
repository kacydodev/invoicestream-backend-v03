import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { authRouter } from './routes/auth';
import { auth } from 'express-openid-connect';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());

// Oauth
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH_SECRET,
  baseURL: `http://localhost:${port}`,
  clientID: 'MeC3vgBs3x7XPAVGbeDJkD4buYhEpGRs',
  issuerBaseURL: 'https://invoicestream.au.auth0.com',
};
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// app.get('/', (req: Request, res: Response) => {
// 	res.send('Welcome to our secure Express.js API with TypeScript!');
// });

app.use('/api', authRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
