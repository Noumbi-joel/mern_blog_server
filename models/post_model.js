import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  idUser: {
    type: String,
    default: new Date().getTime().toString(),
  },
  title: String,
  paragraph: String,
  imageUrl: String,
  categoryName: String,
  githubLink: String,
  debutDate: String,
  endDate: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
