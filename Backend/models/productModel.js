const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name:        { type: String, required: [true, "please enter a product name"] },
        price:       { type: Number, required: [true, "please enter a product price"] },
        description: { type: String, required: [true, "please fill this field"] },
        image:       { type: String, required: [true, "please enter an image URL"] },
        category: {type: String, required: [true, "please enter a category"]}
    },
    { timestamps: true }
)

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;