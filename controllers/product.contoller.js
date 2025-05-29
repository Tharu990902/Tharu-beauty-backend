import Product from '../models/productmodel.js';
import asyncHandler from 'express-async-handler';


// Create a new product
// POST /api/product/create

export const createProduct = asyncHandler(async (req, res) => {

    const newproduct = await Product(req.body);
    const savedProduct = await newproduct.save();

    if(Product){
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product: savedProduct
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: "Product creation failed"
        });
    }
}
)

// update a product by id
// PUT /api/product/update/:id

export const updateProduct = asyncHandler(async (req, res) => {
    const updateProduct = await Product.findByIdAndUpdate(
        req.params.id, 
        {
            $set: req.body
        }, 
        { new: true }
    );
    
    if(!updateProduct) {
        res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }else {
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product: updateProduct
        });
    }
}
)

// delete a product by id
// DELETE /api/product/delete/:id

export const deleteProduct = asyncHandler(async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    
    if(!deleteProduct) {
        res.status(400).json({
            success: false,
            message: "Product not found"
        });
    }else {
        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    }
})
   
// get all product
// GET /api/product/:id

export const getProduct = asyncHandler(async (req, res) => {
    const product  = await Product.findById(req.params.id);
    if(!product) {
        res.status(400).json({
            success: false,
            message: "Product not found"
        });
}
    else {
        res.status(200).json({
            success: true,
            product: product
        });
    }
}
)

// get all products
// GET /api/product

export const getAllProducts = asyncHandler(async (req, res) => {
    
    const qnew = req.query.new;
    const qcategory = req.query.category;
    const qsearch = req.query.search;

    let products;

    if(qnew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if(qcategory) {
        products = await Product.find({
            categories: {
                $in: [qcategory],
            },
        });
    } else if(qsearch) {
        products = await Product.find({
            name: { $regex: qsearch, 
                    $options: 'i',  
                    $caseSensitive: false,
                    $dicriticSensitive: false,
                    $search: qsearch  
                    
                 }
        });
    } else {
        products = await Product.find().sort({ createdAt: -1 });
    }
})


//Rating 

export const rateProduct = asyncHandler(async (req, res) => {

    const {star , name, comment, postedby} = req.body;

    if(star && name && comment && postedby) {
        
        const postedby = await Product.findByIdAndUpdate(req.params.id,
            {
                $push: {
                    ratings: {
                        star: star,
                        name: name,
                        comment: comment,
                        postedby: postedby
                    }
                }
            },
            { new: true }
        );
        
        res.status(200).json({
            success: true,
            message: "Rating added successfully",
            product: postedby
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: "Rating failed"
        });
    }
})