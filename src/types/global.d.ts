declare namespace NodeJS {
  interface ProcessEnv {
    API_ENDPOINT: string;
    API_KEY: string;
    DB_COLLECTION: string;
    DB_DATABASE: string;
    DB_DATA_SOURCE: string;
    NODE_ENV?: 'development' | 'production';
    PORT?: string;
  }
}
