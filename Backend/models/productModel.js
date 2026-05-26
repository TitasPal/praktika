const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, "please enter a product name"] },
        price: { type: Number, required: [true, "please enter a product price"] },
        description: { type: String, required: [true, "please fill this field"] },
        category: { type: String, required: [true, "please select a product category"] },
    },
    {
        timestamps: true,
    }
)

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;