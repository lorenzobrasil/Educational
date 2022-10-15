import postsController from "../controllers/posts.controller.js";
import express from "express";

const router = express.Router();

router.post("/", postsController.insertPost);

router.get("/", postsController.getPosts);

export default router;
