import express from "express";
import proprietarioController from "../controllers/proprietarios.controller.js";

const router = express.Router();

router.post("/", proprietarioController.insertProprietario);

router.put("/", proprietarioController.updateProprietario);

router.delete("/:id", proprietarioController.deleteProprietario);

router.get("/", proprietarioController.getProprietarios);

router.get("/:id", proprietarioController.getProprietario);

export default router;
