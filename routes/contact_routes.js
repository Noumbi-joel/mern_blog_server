import express from "express";

//middlewares
import {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} from "../controllers/contacts_controller.js";

const router = express.Router();

router.get("/", getContacts);
router.post("/", createContact);
router.patch("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;
