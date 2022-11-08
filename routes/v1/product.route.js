const express = require("express");
const { addProduct } = require("../../controllers/v1/product.controller");
const router = express.Router();

router.route("/").post(addProduct);

module.exports = router;
