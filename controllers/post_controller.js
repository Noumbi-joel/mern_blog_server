import Post from "../models/post_model.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    if (req.role === !process.env.ADMIN) {
      return res.status(401).json({ message: "UNAUTHORIZED" });
    }
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);
  try {
    if (req.role === !process.env.ADMIN) {
      return res.status(401).json({ message: "UNAUTHORIZED" });
    }
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }

  if (req.role === !process.env.ADMIN) {
    return res.status(401).json({ message: "UNAUTHORIZED" });
  }

  const updatedPost = await Post.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  if (req.role === !process.env.ADMIN) {
    return res.status(401).json({ message: "UNAUTHORIZED" });
  }

  await Post.findByIdAndRemove(id);

  res.json({ message: "post deleted successfully" });
};
