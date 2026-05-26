const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();
const { getProducts } = require('../controllers/productController');
const { getProduct } = require('../controllers/productController');
const { createProduct } = require('../controllers/productController');
const { updateProduct } = require('../controllers/productController');
const {deleteProduct} = require('../controllers/productController');



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