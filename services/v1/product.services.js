const Product = require("../../models/v1/product");

exports.productGetServices = (filters, queries) => {
    const result = Product.find(filters).sort(queries.sortby);
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

exports.productUpdateServices = (id, data) => {
    const result = Product.updateOne({ _id: id }, { $set: data });
    return result;
};
