const Product = require("../../models/v1/product");

exports.productAddServices = data => {
    const result = Product.create(data);
    return result;
};
