import { createConnection } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const initializeDatabase = async () => {
  try {
    console.log('Attempting to connect to database with config:', {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      database: process.env.DB_NAME,
      ssl: process.env.NODE_ENV === 'production'
    });

    const connection = await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/../entities/*.entity.ts'],
      synchronize: process.env.NODE_ENV !== 'production',
      ssl: process.env.NODE_ENV === 'production' ? {
        rejectUnauthorized: false
      } : false,
      logging: true,
      extra: {
        connectionTimeoutMillis: 5000,
        query_timeout: 5000,
        statement_timeout: 5000
      }
    });

    console.log('Database connection established');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', {
      error: error.message,
      code: error.code,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME
    });
    throw error;
  }
};
