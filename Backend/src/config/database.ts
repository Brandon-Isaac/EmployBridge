import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const initializeDatabase = async () => {
  try {
    console.log('Attempting to connect to database with config:', {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      database: process.env.DB_NAME,
      // ssl: false
    });

    const connection = await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [path.join(__dirname, '../entities/*.entity{.ts,.js}')],
      synchronize: process.env.NODE_ENV !== 'production',
      // ssl: {
      //   rejectUnauthorized: false
      // },
      // logging: true,
      // extra: {
      //   ssl: {
      //     rejectUnauthorized: false
      //   },
      //   connectionTimeoutMillis: 10000,
      //   query_timeout: 10000,
      //   statement_timeout: 10000,
      //   idle_in_transaction_session_timeout: 10000
      // }
    });

    console.log('Database connection established');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', {
      error: error.message,
      code: error.code,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      // ssl: false
    });
    throw error;
  }
};
