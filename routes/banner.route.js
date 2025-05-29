import { createBanner , deleteBanner , getAllBanners , getRandomBanner  } from "../controllers/banner.controller.js";
import express from "express";
const router = express.Router();


router.post("/", createBanner); // Create a new banner
router.get("/", getAllBanners); // Get all banners
router.get("/random", getRandomBanner); // Get a random banner
router.delete("/:id", deleteBanner); // Delete a banner by ID

export default router;