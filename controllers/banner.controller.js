import Banner from '../models/bannermodel.js';
import asyncHandler from 'express-async-handler';


// Create a new banner
// POST /api/banner/create

export const createBanner = asyncHandler(async (req, res) => {
    const newBanner = new Banner(req.body);
    const savedBanner = await newBanner.save();

    if (savedBanner) {
        res.status(201).json({
            success: true,
            message: "Banner created successfully",
            banner: savedBanner
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Banner creation failed"
        });
    }
})

// Get all banners
// GET /api/banner/

export const getAllBanners = asyncHandler(async (req, res) => {
    const banners = await Banner.find();

    if (banners) {
        res.status(200).json({
            success: true,
            message: "Banners fetched successfully",
            banners: banners
        });
    } else {
        res.status(400).json({
            success: false,
            message: "No banners found"
        });
    }
})

//delete a banner by id
// DELETE /api/banner/delete/:id

export const deleteBanner = asyncHandler(async (req, res) => {

    const deletedBanner = await Banner.findByIdAndDelete(req.params.id);

    if (deletedBanner) {
        res.status(200).json({
            success: true,
            message: "Banner deleted successfully"
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Banner not found"
        });
    }
})

//get  Random Banner
// GET /api/banner/random

export const getRandomBanner = asyncHandler(async (req, res) => {

    const banners = await Banner.find();

    if(!banners) {
        res.status(404).json({
            success: false,
            message: "banners were not fetched or something went wrong"
        });}
    else{
        const randomIndex = Math.floor(Math.random() * banners.length);
        const randomBanner = banners[randomIndex];
        
        res.status(200).json({
            success: true,
            message: "Random banner fetched successfully",
            banner: randomBanner
        });
    }
    }
)