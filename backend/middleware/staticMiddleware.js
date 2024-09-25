import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name from the file URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticMiddleware = express.static(
  path.join(__dirname, "../public/images")
);

export default staticMiddleware;
