import express from "express";
import accountController from "../controllers/account.controller.js";

const router = express.Router();

router.post("/", accountController.createAccount);

router.get("/", accountController.getAccounts);

router.get("/:id", accountController.getAccountsId);

router.delete("/:id", accountController.deleteAccount);

/*Obs: Put x Patch
O put serve para atualizar o document de maneira integral, enquanto o patch atualiza apenas algum (ou alguns) atributos do document.
*/
router.put("/", accountController.putAccount);

router.patch("/updateBalance", accountController.updateAccountBalance);

router.use((err, req, res, next) => {
  global.logger.error(`error: ${req.method}, ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
