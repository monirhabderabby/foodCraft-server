const express = require("express");
const { addProduct, getProducts, deleteProduct, updateProduct } = require("../../controllers/v1/product.controller");
const router = express.Router();

router.route("/").post(addProduct).get(getProducts);

router.route("/:id").delete(deleteProduct).patch(updateProduct);

module.exports = router;
