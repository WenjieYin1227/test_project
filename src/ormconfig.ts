import { config } from 'dotenv';

config();

const ormconfig = {
  type: 'mysql',
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  entities: ['src/**/*.entity.ts'],
  migrations: ['databases/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'databases/migrations',
  },
  synchronize: false,
};

export default ormconfig;
