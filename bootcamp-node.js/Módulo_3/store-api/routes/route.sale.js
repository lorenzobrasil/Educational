import express from "express";
import controllerSale from "../controllers/controller.sale.js";

const router = express.Router();

router.post("/", controllerSale.createSale);

router.get("/", controllerSale.getSales);

router.get("/:id", controllerSale.getSale);

router.delete("/:id", controllerSale.deleteSale);

router.put("/", controllerSale.updateSale);

export default router;
