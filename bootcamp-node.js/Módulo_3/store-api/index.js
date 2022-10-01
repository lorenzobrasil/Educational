import express from "express";
import cors from "cors";
import winston from "winston";
import clientsRouter from "./routes/route.client.js";
import salesRouter from "./routes/route.sale.js";
import suppliersRouter from "./routes/route.supplier.js";
import productsRouter from "./routes/route.product.js";

//boillerplate do winston
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `timestamp: ${timestamp}, label: [${label}], level: ${level}, message: ${message} `;
});

global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "store-api.log" }),
  ],
  format: combine(label({ label: "store-api" }), timestamp(), myFormat),
});

const app = express();

app.use(express.json());

app.use(cors());

app.use("/client", clientsRouter);
app.use("/sale", salesRouter);
app.use("/supplier", suppliersRouter);
app.use("/product", productsRouter);

app.use((err, req, res, next) => {
  logger.error(`${req.method}, ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(3000, () => {
  console.log("API Started");
});
