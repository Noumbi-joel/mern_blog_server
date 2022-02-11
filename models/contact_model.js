import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  idUser: {
    type: String,
    default: new Date().getTime().toString(),
  },
  idAdmin: {
    type: String,
    default: new Date().getDate().toString(),
  },
  name: String,
  email: String,
  message: String,
  check: String,
  approved: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
