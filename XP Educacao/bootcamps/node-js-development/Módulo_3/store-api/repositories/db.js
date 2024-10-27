// Nesse tipo de arquivo criamos tanto a conexão em si do banco de dados como o pool de conexões, que serve para poupar processamento do servidor de criar/desfazer conexão a cada requisição. Por isso a lib pg possui um objeto do tipo Pool, para otimizar a questão do acesso ao banco de dados.

import pg from "pg";
import * as dotenv from "dotenv";

dotenv.config();

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString: process.env.CONNECTION_STRING,
  });
  global.connection = pool;
  return pool.connect();
}

export default {
  connect,
};
