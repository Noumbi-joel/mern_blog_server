import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  title: String,
  posts: [Object],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
