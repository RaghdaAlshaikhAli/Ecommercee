const express = require('express');
const { getProductCategory, PostProductCategory, PatchProductCategory, DeleteProductCategory } = require('../controllers/ProductController');
const ProductRouter = express.Router();


ProductRouter.get('/products', getProductCategory)
ProductRouter.post('/products', PostProductCategory)
ProductRouter.patch('/products/:id', PatchProductCategory)
ProductRouter.delete('/products/:id', DeleteProductCategory)

module.exports = ProductRouter