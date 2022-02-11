import express from "express";

//middlewares
import {
  authenticate,
  register,
  getUsers,
  deleteUser,
} from "../controllers/auth_controller.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/signup", register);
router.delete("/delete/user/:id", deleteUser);
/* router.post("/signin", authenticate); */
/* router.patch("/:id", updateUser);
 */

export default router;
