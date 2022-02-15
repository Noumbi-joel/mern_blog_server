import express from "express";

//middlewares
import { signin, signup } from "../controllers/auth_controller.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

export default router;
