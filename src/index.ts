import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());

app.use('/api', router);

// make sure to place this at the end of route handling block
app.use((req, res) => {
  res.status(404);
  res.json({ message: 'Endpoint not found. Please check with API Document.' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
