const Product = require("../Models/productSchema");
const asyncHandler = require("../src/utils/asyncHandler");
const ApiResponse = require("../src/utils/ApiResponse");
const ApiError = require("../src/utils/ApiError");
const { uploadOnCloudinary } = require("../src/utils/cloudinary");

exports.createProduct = asyncHandler(async (req, res) => {
  // console.log(req.body);
  // console.log(req?.files?.imageCover[0]?.path);

  const { name, price, summary, description, priceDiscount } = req.body;

  if (!name || !price || !summary || !description) {
    throw new ApiError(400, "All Fields are requires!");
  }

  if (!req?.files?.imageCover[0]?.path) {
    throw new ApiError(400, "ImageCover Path is missing!");
  }

  const imageCover = await uploadOnCloudinary(req?.files?.imageCover[0]?.path);
  console.log(imageCover);

  if (!imageCover) {
    throw new ApiError(400, "ImageCover file is requires!");
  }

  if (!imageCover?.url) {
    throw new ApiError(400, "ImageCover Url is requires!");
  }

  // await Product.create(req.body);

  const createdProduct = await Product.create({
    name,
    price,
    summary,
    description,
    priceDiscount,
    imageCover: imageCover?.url,
  });

  res
    .status(201)
    .json(new ApiResponse(200, createdProduct, "Product Created Successfully"));
});

exports.getAllProducts = asyncHandler(async (req, res) => {
  let query = Product.find().select("name ratingsAverage price imageCover");

  if (req.query.sort) {
    // console.log(req.query.sort);
    // ['price','rating']
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  }

  const products = await query;

  if (!products) {
    throw new ApiError(400, "No Products Found");
  }

  res.status(201).json(new ApiResponse(200, products, "All the products"));
});

exports.getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    throw new ApiError(400, "Product Not Found");
  }

  res.status(201).json(new ApiResponse(200, product, "Product found"));
});
