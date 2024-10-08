import Product from "../models/productModel.js"; // Import your Product model

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Name and price are required" });
  }

  const product = new Product({
    name,
    price,
    description,
  });

  try {
    const savedProduct = await product.save(); // Save product to the database
    res.status(201).json({
      message: "Product created successfully",
      product: savedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

// Update a product by ID
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description },
      { new: true, runValidators: true } // Returns the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};

// Export functions using ES module syntax
export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
