import express from "express";
import carsRoute from "./routes/carsRoute.js";

const app = express();

app.use(express.json());

global.fileName = "car-list.json";

app.use("/marcas", carsRoute);

try {
  app.listen(8081, () => {
    console.log("API Started.");
  });
} catch (err) {
  console.log({ error: err.message });
}
