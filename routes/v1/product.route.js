const express = require("express");
const { addProduct, getProducts, deleteProduct } = require("../../controllers/v1/product.controller");
const router = express.Router();

router.route("/").post(addProduct).get(getProducts);

router.route("/:id").delete(deleteProduct);

module.exports = router;
