const express = require('express');
const router = express.Router();
const { 
  getProducts, 
  getProduct, 
  createproduct, 
  updateproduct, 
  deleteproduct 
} = require('../controller/productcontrol.js'); // Ensure the path is correct

// Get all products
  
router.get('/', getProducts);

// Get a single product by ID
router.get('/:id', getProduct);

// Create a new product
router.post('/', createproduct);

// Update a product
router.put('/:id', updateproduct);

// Delete a product
router.delete('/:id', deleteproduct);

module.exports = router;
