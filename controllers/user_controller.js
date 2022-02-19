import User from "../models/user_model.js";
import mongoose from "mongoose";

export const getUsers = async (req, res) => {
  try {
    if (req.userId && req.role !== process.env.ROLE) {
      return res.status(401).json({ message: "ADMINISTRATOR CAPABILITIES" });
    }
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No user with that id");
  }

  if (req.userId && req.role !== process.env.ROLE) {
    return res.status(401).json({ message: "ADMINISTRATOR CAPABILITIES" });
  }

  await User.findByIdAndRemove(id);
  res.json({ message: "user deleted" });
};
