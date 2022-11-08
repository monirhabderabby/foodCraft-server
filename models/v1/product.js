const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a product name"],
        },
        images: [
            {
                img: {
                    type: String,
                },
            },
        ],
        description: {
            type: String,
            required: [true, "Please provide a description"],
        },
        price: {
            type: Number,
        },
        reviews: [
            {
                name: {
                    type: String,
                    required: [true, "Please provide a name"],
                },
                email: {
                    type: String,
                    required: [true, "Please provide a email address for review"],
                },
                ratings: {
                    type: Number,
                    required: [true, "Please provide a rating for review"],
                },
                feedBack: {
                    type: String,
                    required: [true, "Please provide a feedback"],
                },
            },
        ],
        category: {
            type: String,
            required: [true, "Please provide a category for review"],
        },
        subCategory: {
            type: String,
            required: [true, "Please provide a subcategory for review"],
        },
        sells: {
            type: Number,
        },
        wishList: {
            type: Number,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
