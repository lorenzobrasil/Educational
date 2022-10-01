import express from "express";
import controllerSupplier from "../controllers/controller.supplier.js";

const router = express.Router();

router.post("/", controllerSupplier.createSupplier);

router.get("/", controllerSupplier.getSuppliers);

router.get("/:id", controllerSupplier.getSupplier);

router.delete("/:id", controllerSupplier.deleteSupplier);

router.put("/", controllerSupplier.updateSupplier);

export default router;
