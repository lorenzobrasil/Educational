/*
No módulo de conexão com o MongoDb, criamos um client através
da método MongoClient (passando a connection string como param)
do objeto mongodb (importado diretamente do package mongodb)
e retornamos a variável que armazena o client do MongoDB

*/

import * as dotenv from "dotenv";
import mongodb from "mongodb";

dotenv.config();

async function Client() {
  try {
    const client = new mongodb.MongoClient(
      process.env.MONGODB_CONNECTION_STRING
    );
    return client;
  } catch (err) {
    throw err;
  }
}

export default Client;
