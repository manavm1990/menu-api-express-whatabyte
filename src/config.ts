import dotenv from 'dotenv';
import { Config } from './types/config';

dotenv.config();

const config: Config = {
  api: {
    apiEndpoint: process.env.API_ENDPOINT,
    apiKey: process.env.API_KEY,
  },
  db: {
    dataSource: process.env.DB_DATA_SOURCE,
    dataBase: process.env.DB_DATABASE,
    collection: process.env.DB_COLLECTION,
  },
  port: process.env.PORT || 3000,
};

export default config;