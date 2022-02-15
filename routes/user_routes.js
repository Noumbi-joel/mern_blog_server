import express from "express";

import {
  getUsers,
  deleteUser
} from "../controllers/user_controller.js";

const router = express.Router();

router.get("/", getUsers);
router.delete("/delete/:id", deleteUser);

export default router;
