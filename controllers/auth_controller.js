import User from "../models/user_model.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const authenticate = async (req, res) => {
  /* const userData = req.body;
    const newUser = new User(userData);
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(409).json({message: err.message});
    } */
};

export const register = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, imageUrl } =
    req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords don't match" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      imageUrl,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(409).json({ message: err.message });
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
