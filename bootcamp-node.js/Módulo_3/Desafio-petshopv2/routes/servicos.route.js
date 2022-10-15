import express from "express";
import servicoController from "../controllers/servicos.controller.js";

const router = express.Router();

router.post("/", servicoController.insertService);

router.get("/", servicoController.getServices);

router.get("/:proprietary_id", servicoController.getServiceByProprietaryId);

export default router;
