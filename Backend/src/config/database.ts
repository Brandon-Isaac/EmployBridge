import { createConnection } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const initializeDatabase = async () => {
  try {
    const connection = await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'employbridge',
      entities: [__dirname + '/../entities/*.entity.ts'],
      synchronize: process.env.NODE_ENV !== 'production',
    });

    console.log('Database connection established');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};
