import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoute from "./routes/product.route.js";

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Welcome to the CRUD with Node.js Express and MongoDB");
});

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
