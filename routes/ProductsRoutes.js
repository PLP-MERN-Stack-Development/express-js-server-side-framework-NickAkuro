const express = require('express');
const router = express.Router();
const Product = require('../Models/Products');

//Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});

//Create a new product
router.post('/', async (req, res) => {
    const {id, name, description, price, category, inStock} = req.body;

    try {
        const newProduct = new Product({id, name, description, price, category, inStock });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }

});

//Update a product by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            {id: req.params.id},
            req.body,
            {new: true}
        );
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }

});

//Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        await Product.findOneAndDelete({id: req.params.id});
        res.json({message: 'Product deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;