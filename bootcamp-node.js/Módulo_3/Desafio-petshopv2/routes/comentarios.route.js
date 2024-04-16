import express from "express";
import comentariosController from "../controllers/comentarios.controller.js";

const router = express.Router();

router.post("/", comentariosController.insertComentario);

export default router;
