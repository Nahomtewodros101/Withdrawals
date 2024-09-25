// controllers/productController.js
import Product from "../models/productModel.js";

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching products" });
  }
};

// Get a product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the product" });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  const { name, price, description, imageUrl } = req.body;
  const newProduct = new Product({ name, price, description, imageUrl });
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating the product" });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  const { name, price, description, imageUrl } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, imageUrl },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating the product" });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: `Successfully deleted product: ${deletedProduct.name}` });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting the product" });
  }
};
