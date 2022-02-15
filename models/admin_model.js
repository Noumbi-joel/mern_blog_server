import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  imageUrl:String,
  password: String,
  address: String,
  city: String,
  region: String,
  zip: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Admin = mongoose.model("Admin", userSchema);

export default Admin;
