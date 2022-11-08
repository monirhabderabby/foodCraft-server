const { productAddServices } = require("../../services/v1/product.services");

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
