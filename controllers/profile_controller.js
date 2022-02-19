import User from "../models/user_model.js";
import mongoose from "mongoose";

export const getProfile = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No user with that id");
  }
  
  if (!req.userId) {
    return res.status(401).json({ message: "UNAUTHENTICATED" });
  }

  if(!id){
    
  }

  const user = await User.findById(id);
  res.status(200).json(user);
};

export const updateProfile = async(req, res) => {
  const { id: _id } = req.params;
  const profile = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }

  if (!req.userId) {
    return res.status(401).json({ message: "UNAUTHENTICATED" });
  }

  const updateProfile = await User.findByIdAndUpdate(
    _id,
    { ...profile, _id },
    { new: true }
  );

  res.json(updateProfile);
};
