import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import morgan from 'morgan';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
