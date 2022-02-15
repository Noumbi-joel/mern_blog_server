import express from "express";

import {
  getPosts,
  addPost,
  updatePost,
  deletePost,
} from "../controllers/post_controller.js";

import auth from "../middlewares/auth_middleware.js";

const router = express.Router();

//crud post
router.get("/", auth, getPosts);
router.post("/add", auth, addPost);
router.patch("/update/:id", auth, updatePost);
router.delete("/delete/:id", auth, deletePost);

export default router;
