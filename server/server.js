import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  process.env.REACT_APP_MONGODB_CONNECTION_URL ||
  "mongodb+srv://gabriel:05130202Ga@cluster0.wfg8d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.REACT_APP_PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log("Running on port: " + PORT)))
  .catch((error) => console.log(error.message));
