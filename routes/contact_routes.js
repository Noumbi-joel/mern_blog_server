import express from "express";

//middlewares
import {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} from "../controllers/contacts_controller.js";

import auth from "../middlewares/auth_middleware.js";

const router = express.Router();

router.get("/", auth, getContacts);
router.post("/", createContact);
router.patch("/:id", auth, updateContact);
router.delete("/:id", auth, deleteContact);

export default router;
