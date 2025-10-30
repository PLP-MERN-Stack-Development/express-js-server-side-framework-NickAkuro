const mongoose = require('mongoose');

//Define Product Schema
const productSchema = new mongoose.Schema({
    id:{type: Number, required: true, unique: true},
    name:{type: String, required: true},
    description:{type: String, required: true},
    price:{type: Number, required: true},
    category:{type: String, required: true},
    inStock:{type: Boolean, required: true, default: true}
}, {timestamps: true});

//Create Product Model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;