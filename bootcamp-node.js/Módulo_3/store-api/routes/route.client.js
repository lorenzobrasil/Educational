import express from "express";
import controllerClient from "../controllers/controller.client.js";

const router = express.Router();

router.post("/", controllerClient.createClient);

router.get("/", controllerClient.getClients);

router.get("/:id", controllerClient.getClient);

router.delete("/:id", controllerClient.deleteClient);

router.put("/", controllerClient.updateClient);

export default router;
