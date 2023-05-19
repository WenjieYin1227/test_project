import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || '3000',

  /**Database configuration */
  database: {
    dialect: 'mysql',
    host: process.env.DB_HOSTNAME,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};
