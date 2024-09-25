import express from "express";
import Product from "../models/productModel.js"; 
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
  } from "../controllers/productController.js";

const router = express.Router();

// finding yaluten productoch
router.get("/Products", getAllProducts);

// finding andun bcha with an id
router.get("/products/:id",getProductById);

// POST a new product
router.post("/products",createProduct);

// update the/a product
router.put("/products/:id",updateProduct);

// product medelet
router.delete("/products/:id", deleteProduct);

export default router;
