const Product = require("../../models/v1/product");

exports.productGetServices = query => {
    const result = Product.find(query);
    return result;
};
exports.productAddServices = data => {
    const result = Product.create(data);
    return result;
};
exports.productDeleteServices = id => {
    const result = Product.deleteOne({ _id: id });
    return result;
};
