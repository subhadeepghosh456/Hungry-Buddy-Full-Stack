const express = require("express");
const productControllers = require("../Controllers/productControllers");
const { upload } = require("../src/utils/Multer/multer");

const router = express.Router();

router
  .route("/")
  .get(productControllers.getAllProducts)
  .post(
    upload.fields([{ name: "imageCover", maxCount: 1 }]),
    productControllers.createProduct
  );

router.route("/:id").get(productControllers.getSingleProduct);

module.exports = router;
