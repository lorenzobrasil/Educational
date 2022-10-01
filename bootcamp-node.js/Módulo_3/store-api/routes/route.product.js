import express from "express";
import controllerProduct from "../controllers/controller.product.js";

const router = express.Router();

router.post("/", controllerProduct.createProduct);

router.get("/", controllerProduct.getProducts);

router.get("/:id", controllerProduct.getProduct);

router.delete("/:id", controllerProduct.deleteProduct);

router.put("/", controllerProduct.updateProduct);

export default router;
