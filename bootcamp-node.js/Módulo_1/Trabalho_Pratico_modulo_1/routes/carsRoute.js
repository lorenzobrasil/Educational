import express from "express";
import { promises as fs } from "fs";

const carsRoute = express.Router();

// é uma lista de objetos. Cada objeto tem atributos brand (que armazena uma string) e models (que armazena um array de valores)

carsRoute.get("/maisModelos", async (req, res, next) => {
  try {
    const data = JSON.parse(await fs.readFile(global.fileName));
    let max = data[0].models.length;
    for (let i = 0; i < data.length; i++) {
      if (data[i].models.length > max) {
        max = data[i].models.length;
      }
    }

    let maisModelos = data.filter((brand) => {
      return brand.models.length == max;
    });

    maisModelos = maisModelos.map((brand) => {
      return brand.brand;
    });

    if (maisModelos.length == 1) {
      res.send(maisModelos[0]);
    } else {
      res.send(maisModelos);
    }
  } catch (err) {
    next(err);
  }
});

carsRoute.get("/menosModelos", async (req, res, next) => {
  try {
    const data = JSON.parse(await fs.readFile(global.fileName));
    let min = data[0].models.length;
    for (let i = 0; i < data.length; i++) {
      if (data[i].models.length < min) {
        min = data[i].models.length;
      }
    }

    let menosModelos = data.filter((brand) => {
      return brand.models.length == min;
    });

    menosModelos = menosModelos.map((brand) => {
      return brand.brand;
    });

    if (menosModelos.length == 1) {
      res.send(menosModelos[0]);
    } else {
      res.send(menosModelos);
    }
  } catch (err) {
    next(err);
  }
});

carsRoute.get("/listaMaisModelos/:X", async (req, res, next) => {
  try {
    const data = JSON.parse(await fs.readFile(global.fileName));
    const qtd = req.params.X;

    data.sort((a, b) => {
      if (a.models.length > b.models.length) {
        return -1;
      } else if (a.models.length < b.models.length) {
        return 1;
      } else {
        if (a.brand[0] > b.brand[0]) {
          return 1;
        } else if (a.brand[0] < b.brand[0]) {
          return -1;
        } else {
          return 0;
        }
      }
    });

    const topModels = [];
    for (let i = 0; i < qtd; i++) {
      topModels.push(`Marca ${data[i].brand} - ${data[i].models.length}`);
    }
    res.send(topModels);
  } catch (err) {
    next(err);
  }
});

carsRoute.get("/listaMenosModelos/:X", async (req, res, next) => {
  try {
    const data = JSON.parse(await fs.readFile(global.fileName));
    const qtd = req.params.X;

    data.sort((a, b) => {
      if (a.models.length > b.models.length) {
        return 1;
      } else if (a.models.length < b.models.length) {
        return -1;
      } else {
        if (a.brand[0] > b.brand[0]) {
          return 1;
        } else if (a.brand[0] < b.brand[0]) {
          return -1;
        } else {
          return 0;
        }
      }
    });

    const botModels = [];
    for (let i = 0; i < qtd; i++) {
      botModels.push(`Marca ${data[i].brand} - ${data[i].models.length}`);
    }
    res.send(botModels);
  } catch (err) {
    next(err);
  }
});

carsRoute.post("/listaModelos", async (req, res, next) => {
  try {
    let data = JSON.parse(await fs.readFile(global.fileName));

    const marcaRequisicao = req.body.nomeMarca.toLowerCase();

    data = data.map((marca) => {
      return { brand: marca.brand.toLowerCase(), models: marca.models };
    });

    const brandFound = data.find((marca) => {
      return marca.brand == marcaRequisicao;
    });

    if (brandFound != undefined) {
      res.send(brandFound.models);
    } else {
      res.send([]);
    }
  } catch (err) {
    next(err);
  }
});

carsRoute.use((err, res) => {
  res.status(400).send({ error: err.message });
});

export default carsRoute;
