const express = require("express");
const products = require("./data/products");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Get one product based on the product's id
app.get("/api/products/:id", (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  res.json(product);
});

const port = 5000;
app.listen(port, console.log(`Server running on port ${port}`));
