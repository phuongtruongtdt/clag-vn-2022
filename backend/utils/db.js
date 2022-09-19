import fn from "knex";
import dotenv from "dotenv";
dotenv.config();
export const connectionInfo = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const knex = fn({
  client: "mysql2",
  connection: connectionInfo,
  pool: { min: 0, max: 10 },
});

export default knex;