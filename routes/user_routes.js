import express from "express";

import { getUsers, deleteUser } from "../controllers/user_controller.js";

import auth from "../middlewares/auth_middleware.js";

const router = express.Router();

router.get("/", auth, getUsers);
router.delete("/delete/:id", auth, deleteUser);

export default router;
