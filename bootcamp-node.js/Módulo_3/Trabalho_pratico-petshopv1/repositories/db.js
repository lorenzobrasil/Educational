import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

async function connect() {
  try {
    if (global.connection) {
      return global.connection.connect();
    } else {
      const pool = new pg.Pool({
        connectionString: process.env.CONNECTION_STRING,
      });
      global.connection = pool;
      return global.connection.connect();
    }
  } catch (err) {
    throw new Error(err.message);
  }
}

export default {
  connect,
};
