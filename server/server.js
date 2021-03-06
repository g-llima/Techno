import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/register", authRoutes);

const CONNECTION_URL = process.env.REACT_APP_MONGODB_CONNECTION_URL;
const PORT = process.env.REACT_APP_PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log("Running on port: " + PORT)))
  .catch((error) => console.log(error.message));
