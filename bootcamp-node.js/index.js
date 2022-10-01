import express from "express";
import proprietarioRouter from "./routes/proprietarios.route.js";
import animalRouter from "./routes/animais.route.js";

const app = express();

app.use(express.json());

app.use("/proprietario", proprietarioRouter);

app.use("/animal", animalRouter);

//tratamento default de erros
app.use((err, req, res, next) => {
  res.status(400).send(console.log({ error: err.message }));
});

try {
  app.listen(3000, () => {
    console.log("API Started");
  });
} catch (err) {
  console.log({ error: err.message });
}
