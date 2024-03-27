const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/:categoryName/products", productsController.getTopProducts);
router.get(
  "/:categoryName/products/:productId",
  productsController.getProductById
);

module.exports = router;
