import Contact from "../models/contact_model.js";

import mongoose from "mongoose";

export const getContacts = async (req, res) => {
  try {
    if (req.role === !process.env.ADMIN) {
      return res.status(401).json({ message: "UNAUTHORIZED" });
    }
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createContact = async (req, res) => {
  const contact = req.body;
  const newContact = new Contact(contact);
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "unauthenticated" });
    }
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateContact = async (req, res) => {
  const { id: _id } = req.params;
  const contact = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No contact with that id");
  }

  if (req.role === !process.env.ADMIN) {
    return res.status(401).json({ message: "UNAUTHORIZED" });
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    _id,
    { ...contact, _id, approved: true },
    {
      new: true,
    }
  );

  res.json(updatedContact);
};

export const deleteContact = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No contact with that id");
  }

  if (req.role === !process.env.ADMIN) {
    return res.status(401).json({ message: "UNAUTHORIZED" });
  }

  await Contact.findByIdAndRemove(id);

  res.json({ message: "contact deleted successfully" });
};
