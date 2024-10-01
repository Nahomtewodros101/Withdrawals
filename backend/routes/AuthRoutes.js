import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import User from "../models/user";
import dotenv from 'dotenv'; 
import rateLimit from 'express-rate-limit';

dotenv.config(); 

const router = express.Router(); 

const registerLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 5, // Limit each IP to 5 registration attempts per windowMs
  message: 'Too many registration attempts. Please try again after 15 minutes.'
});


router.post(
  '/register',
  registerLimiter, 
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('username').notEmpty() 
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ email });  
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({
        username,
        password: hashedPassword,
        email
      });

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });  

      res.status(201).json({ token, msg: "User registered successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

export default router;
