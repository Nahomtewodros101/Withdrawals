import express from "express";
import mongoose from "mongoose";
import Dotenv from "dotenv";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoutes.js";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";

Dotenv.config();

const app = express();
const port = process.env.Port;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.Mongo_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use("/api", productRoute);
app.use("/api/users", userRoute); // Ensure this line is present
app.use(errorHandler);
