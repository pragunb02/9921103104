const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const app = express();
const PORT = process.env.PORT || 3000;
mongoose
  .connect("mongodb://127.0.0.1:27017/top_products")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
  });
app.use(bodyParser.json());
app.use("/categories", productRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
