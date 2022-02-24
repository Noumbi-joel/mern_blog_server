import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import contactRoutes from "./routes/contact_routes.js";
import authRoutes from "./routes/auth_routes.js";
import profileRoutes from "./routes/profile_routes.js";
import userRoutes from "./routes/user_routes.js";
import postRoutes from "./routes/post_routes.js";

dotenv.config({ path: "./config.env" });
const app = express();
const __filename = fileURLToPath(import.meta.url);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/profile", profileRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/contacts", contactRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(path.dirname(__filename), "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__filename), "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hello world men 😁!");
  });
}

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((e) => console.log(e.message));
