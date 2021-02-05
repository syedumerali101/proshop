import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

//@description  Fetch all products
//@route  GET /api/products
//@access  Public (Anyone can handle it no need of private tokens)

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @description  Fetch all products
// @route  GET /api/products/:id
// @access  Public (Anyone can handle it no need of private tokens)
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //   const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      // res.status(404).json({ message: "Product Not Found" });
      res.status(404);
      throw new Error("Product Not Found");
      //we did this new error thing because we have made our custom error handler, the above code is also fine
    }
  })
);

export default router;
