// routes/userRoutes.js
import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/userController.js"; 
import { protect } from "../middleware/jwtMiddleware.js"; 

const router = express.Router();

// Register a new user
router.post("/", registerUser); // Corrected to just "/"

// Login an existing user
router.post("/login", loginUser); // Corrected to "/login"

// Get the logged-in user's data
router.get("/me", protect, getMe);

export default router; 
