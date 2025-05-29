import { deleteProduct, getProduct , getAllProducts , createProduct , rateProduct , updateProduct } from "../controllers/product.contoller.js";
import express from "express";

const router = express.Router();

// Create a new product
router.post("/create", createProduct);
// Get all products
router.get("/", getAllProducts);
// Get a product by ID
router.get("/:id", getProduct);
// Delete a product by ID
router.delete("/delete/:id", deleteProduct);
// Rate a product
router.put("/rate/:id", rateProduct);
// Update a product by ID
router.put("/update/:id", updateProduct);

export default router;