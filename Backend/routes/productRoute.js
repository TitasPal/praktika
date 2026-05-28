const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.get('/', getProducts);

//get products with id
router.get('/:id', getProduct);

//post product
router.post('/', createProduct);

//update product
router.put('/:id', updateProduct);

//delete product
router.delete('/:id', deleteProduct);

module.exports = router;