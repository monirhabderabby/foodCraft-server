const { productAddServices, productGetServices, productDeleteServices, productUpdateServices } = require("../../services/v1/product.services");

exports.getProducts = async (req, res) => {
    try {
        const filters = { ...req.query };

        const exculedFields = ["sort", "page", "limit"];
        exculedFields.forEach(field => delete filters[field]);

        const queries = {};

        if (req.query.sort) {
            const sortby = req.query.sort.split(",").join(" ");
            queries.sortby = sortby;
        }

        const result = await productGetServices(filters, queries);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get products from db",
            error: error.message,
        });
    }
};
exports.addProduct = async (req, res) => {
    try {
        const result = await productAddServices(req.body);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't add product to db",
            error: error.message,
        });
    }
};
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await productDeleteServices(id);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't delete product to db",
            error: error.message,
        });
    }
};
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await productUpdateServices(id, req.body);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't update product to db",
            error: error.message,
        });
    }
};
