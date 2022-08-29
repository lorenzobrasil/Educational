import express from "express";
import { appendFile, promises as fs } from "fs";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const data = JSON.parse(await fs.readFile(global.fileName));
    if (!req.body.name || req.body.balance == null) {
      throw new Error("Name e balance são campos obrigatórios.");
    }
    let account = {
      id: data.nextId++,
      name: req.body.name,
      balance: req.body.balance,
    };
    // Obs: uso do spread operator (...) é útil para pegar todos os dados que são enviados, nesse exemplo, no body da requisição

    data.accounts.push(account);
    await fs.writeFile(global.fileName, JSON.stringify(data, null, 2));
    // Obs: o parâmetro 2 da função JSON.stringify() deixa os objetos escritos no arquivo em formato "pretty". Não é ideal em arquivos projetados para armazenarem muitos dados.
    logger.info(`POST /account - ${JSON.stringify(account)}`);
    res.send(account);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const data = JSON.parse(await fs.readFile(global.fileName));
    logger.info(`GET /account`);
    res.send(data.accounts);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = JSON.parse(await fs.readFile(global.fileName));
    if (req.params.id >= data.nextId) {
      throw new Error("id not found");
    } else {
      const account = data.accounts.filter((acc) => {
        return acc.id == req.params.id;
      });
      logger.info(`GET /account/:id`);
      //obs: método .find() é mais eficiente já que traz o primeiro "match", não checando o restante dos valores, enquanto o .filter() checa o array inteiro.
      res.send(account);
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let data = JSON.parse(await fs.readFile(global.fileName));
    data.accounts = data.accounts.filter((account) => {
      return account.id != req.params.id;
    });
    await fs.writeFile(global.fileName, JSON.stringify(data));
    logger.info(`DELETE /account/:id - ${JSON.stringify(req.params.id)}`);
    res.end();
  } catch (err) {
    next(err);
  }
});

/*Obs: Put x Patch
O put serve para atualizar o document de maneira integral, enquanto o patch atualiza apenas algum (ou alguns) atributos do document.
*/
router.put("/", async (req, res, next) => {
  try {
    const data = JSON.parse(await fs.readFile(global.fileName));
    if (!req.body.id || !req.body.name || req.body.balance == null) {
      throw new Error("ID, Name e balance são campos obrigatórios.");
    }
    const account = req.body;
    const index = data.accounts.findIndex((a) => {
      return a.id == req.body.id;
    });

    if (index === -1) {
      throw new Error("Registro não encontrado");
    }

    data.accounts[index].name = account.name;
    data.accounts[index].balance = account.balance;

    await fs.writeFile(global.fileName, JSON.stringify(data));

    logger.info(`PUT - ${JSON.stringify(account)}`);

    res.send(account);
  } catch (err) {
    next(err);
  }
});

router.patch("/updateBalance", async (req, res, next) => {
  try {
    const data = JSON.parse(await fs.readFile(global.fileName));
    if (req.body.balance == null) {
      throw new Error("Balance são campos obrigatórios.");
    }
    const index = data.accounts.findIndex((a) => {
      return a.id == req.body.id;
    });

    if (index === -1) {
      throw new Error("Registro não encontrado");
    }

    data.accounts[index].balance = req.body.balance;

    await fs.writeFile(global.fileName, JSON.stringify(data));
    logger.info(
      `PATCH /account/updateBalance - ${JSON.stringify(data.accounts[index])}`
    );
    res.send(data.accounts[index]);
  } catch (err) {
    next(err);
  }
});

router.patch("/updateName", async (req, res, next) => {
  try {
    const data = JSON.parse(await fs.readFile(global.fileName));
    const index = data.accounts.findIndex((a) => {
      return a.id == req.body.id;
    });

    if (index === -1) {
      throw new Error("Registro não encontrado");
    }

    data.accounts[index].name = req.body.name;

    await fs.writeFile(global.fileName, JSON.stringify(data));
    logger.info(
      `PATCH /account/updateName - ${JSON.stringify(data.accounts[index])}`
    );
    res.send(data.accounts[index]);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  global.logger.error(`error: ${req.method}, ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
