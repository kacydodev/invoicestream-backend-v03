import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { authRouter } from './routes/auth';
import { auth } from 'express-openid-connect';
import { apiRouter } from './routes/api';

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

app.use('/api', apiRouter);
app.use('/api/auth', authRouter);

// make sure to place this at the end of route handling block
app.use((req, res) => {
  res.status(404);
  res.json({ message: 'Endpoint not found. Please check with API Document.' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
