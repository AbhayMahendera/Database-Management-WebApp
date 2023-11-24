const productService = require('../services/productsService');

exports.getAllProducts = (req, res) => {
   try {
      const products = productService.getAllProducts();
      res.json(products);
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

exports.getProductById = (req, res) => {
   try {
      const productId = parseInt(req.params.id);
      const product = productService.getProductById(productId);

      if (product) {
         res.json(product);
      } else {
         res.status(404).json({ error: 'Product not found' });
      }
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

exports.deleteProduct = (req, res) => {
   try {
      const productId = parseInt(req.params.id);
      const success = productService.deleteProduct(productId);

      if (success) {
         res.json({ success: true });
      } else {
         res.status(404).json({ error: 'Product not found' });
      }
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

exports.addProduct = (req, res) => {
   try {
      const newProduct = req.body;
      const addedProduct = productService.addProduct(newProduct);
      res.json(addedProduct);
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};
