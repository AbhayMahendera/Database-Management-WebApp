const productsModel = require('../models/productsModel');

exports.getAllProducts = () => {
   return productsModel.getAllProducts();
};

exports.getProductById = (productId) => {
   return productsModel.getProductById(productId);
};

exports.deleteProduct = (productId) => {
   return productsModel.deleteProduct(productId);
};

exports.addProduct = (newProduct) => {
   return productsModel.addProduct(newProduct);
};
