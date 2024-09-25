import express from "express";
import mongoose from "mongoose";
import Dotenv from "dotenv";
import productRoute from "./routes/productRoute.js"; // Include .js extension
import cors from 'cors';
import staticMiddleware from './middleware/staticMiddleware.js'
import errorHandler from "./middleware/errorHandler.js";
Dotenv.config();

const mango = process.env.Mongo_URI;
const app = express();
const port = process.env.Port;

app.use(express.json());

app.use(cors())






mongoose
  .connect(mango)
  .then(() => {
    app.listen(port, () => {
      console.log(`serveru is runnin on ${port} ena demo mongo connect adergual `);
    });
  })
  .catch((error) => {
    console.error("error tefetrual man", error);
  });

app.use("/api", productRoute); 
app.use(errorHandler)