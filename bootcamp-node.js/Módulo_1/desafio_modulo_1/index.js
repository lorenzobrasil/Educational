import express from "express";
import { promises as fs } from "fs";
import routerOrder from "./routes/routes.orders.js";

global.fileName = "./pedidos.json";

const app = express();
app.use(express.json());

app.use("/orders", routerOrder);

try {
  app.listen(8081, () => {
    console.log("API Started");
  });
} catch (err) {
  console.status(400).send({ error: err.message });
}
