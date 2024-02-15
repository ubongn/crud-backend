import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./model/product.model.js";

dotenv.config();
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(8000, () => {
      console.log("Listening on   port 8000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the CRUD with Node.js Express and MongoDB");
});
