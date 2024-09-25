import express from "express";
import mongoose from "mongoose";
import Dotenv from "dotenv";
import productRoute from "./routes/productRoute.js"; // Include .js extension
import cors from "cors";
import staticMiddleware from "./middleware/staticMiddleware.js";
import errorHandler from "./middleware/errorHandler.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
Dotenv.config();

const mango = process.env.Mongo_URI;
const app = express();
const port = process.env.Port;

app.use(express.json());

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "public/images")));

mongoose
  .connect(mango)
  .then(() => {
    app.listen(port, () => {
      console.log(
        `serveru is runnin on ${port} ena demo mongo connect adergual `
      );
    });
  })
  .catch((error) => {
    console.error("error tefetrual man", error);
  });

app.use("/api", productRoute)
app.use(errorHandler);
