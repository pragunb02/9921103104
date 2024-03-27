const axios = require("axios");
const Product = require("../models/productModel");

exports.getTopProducts = async (req, res) => {
  const { companyName, category, top, minPrice, maxPrice } = req.query;

  try {
    const response = await axios.get(
      `http://20.244.56.144/test/companies/${companyName}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    const products = response.data;
    // MongoDB
    await Product.insertMany(products);

    res.json(products);
  } catch (error) {
    console.error("Error fetching top products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getProductById = async (req, res) => {
  const productId = req.params.productId;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
