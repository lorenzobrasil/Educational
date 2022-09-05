import accountService from "../services/account.service.js";

async function createAccount(req, res, next) {
  try {
    if (!req.body.name || req.body.balance == null) {
      throw new Error("Name e balance são campos obrigatórios.");
    }

    let account = await accountService.createAccount({
      name: req.body.name,
      balance: req.body.balance,
    });
    logger.info(`POST /account - ${JSON.stringify(account)}`);
    res.send(account);
  } catch (err) {
    next(err);
  }
}

async function getAccounts(req, res, next) {
  try {
    const data = await accountService.getAccounts();

    logger.info(`GET /account`);
    res.send(data);
  } catch (err) {
    next(err);
  }
}

async function getAccountsId(req, res, next) {
  try {
    const accountIds = await accountService.getIds();
    const searchId = parseInt(req.params.id);

    if (accountIds.includes(searchId)) {
      const account = await accountService.getAccountsId(searchId);

      logger.info(`GET /account/:id`);
      res.send(account);
    } else {
      throw new Error("id not found");
    }
  } catch (err) {
    next(err);
  }
}

async function deleteAccount(req, res, next) {
  try {
    await accountService.deleteAccount(parseInt(req.params.id));
    logger.info(`DELETE /account/:id - ${JSON.stringify(req.params.id)}`);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function putAccount(req, res, next) {
  try {
    if (!req.body.id || !req.body.name || req.body.balance == null) {
      throw new Error("ID, Name e balance são campos obrigatórios.");
    }

    const ids = await accountService.getIds();

    if (!ids.includes(parseInt(req.body.id))) {
      throw new Error("Registro não encontrado");
    } else {
      const accountToBePut = req.body;
      await accountService.putAccount(accountToBePut);
      logger.info(`PUT - ${JSON.stringify(accountToBePut)}`);
      res.send(accountToBePut);
    }
  } catch (err) {
    next(err);
  }
}

async function updateAccountBalance(req, res, next) {
  try {
    const ids = await accountService.getIds();
    if (req.body.balance == null) {
      throw new Error("Balance é campo obrigatório.");
    } else if (!ids.includes(parseInt(req.body.id))) {
      throw new Error("Registro não encontrado");
    } else {
      const updatedAccount = await accountService.updateAccountBalance(
        req.body
      );
      logger.info(
        `PATCH /account/updateBalance - ${JSON.stringify(updatedAccount)}`
      );
      res.send(updatedAccount);
    }
  } catch (err) {
    next(err);
  }
}

export default {
  createAccount,
  getAccounts,
  getAccountsId,
  deleteAccount,
  putAccount,
  updateAccountBalance,
};
