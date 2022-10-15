import express from "express";
import { promises as fs } from "fs";
import accountsRouter from "./routes/account.route.js";
import winston from "winston";
import cors from "cors";

const app = express();
app.use(express.json());

/*
Caso seja de interesse liberar o acesso de apenas uma rota
específica (ex: get de /accounts), é possível especificar
inserir argumento cors() na própria definição da rota,
no arquivo que contenha o route de interesse.
*/
app.use(cors());

//Servindo arquivo estático (demonstração CORS)
app.use(express.static("public"));

app.use("/account", accountsRouter);

//Fazendo um destruct do winston.format
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} | label: [${label}], level: ${level}, message: ${message} `;
});
global.fileName = "accounts.json";
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "my-bank-api.log" }),
  ],
  format: combine(label({ label: "my-bank-api" }), timestamp(), myFormat),
});

try {
  app.listen(8081, async () => {
    try {
      await fs.readFile(global.fileName);
      logger.info("API started");
    } catch (err) {
      const initialJson = {
        nextId: 1,
        accounts: [],
      };
      try {
        await fs.writeFile(global.fileName, JSON.stringify(initialJson));
        logger.info("File created.");
      } catch (err) {
        logger.error(err);
      }
    }
  });
} catch (err) {
  console.log(err);
}
