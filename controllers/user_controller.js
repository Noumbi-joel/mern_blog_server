import User from "../models/user_model.js";
import mongoose from "mongoose";

export const getUsers = async (req, res) => {
  try {
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
  await User.findByIdAndRemove(id);
  res.json({ message: "user deleted" });
};