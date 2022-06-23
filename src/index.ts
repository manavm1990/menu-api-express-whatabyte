import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import config from './config';
import { handle404, handleError } from './middleware/error.middleware';
import router from './router';

const app = express();

if (!process.env.PORT) {
  process.exit(1);
}

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/menu/items', router);

app.use(handleError);
app.use(handle404);

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
