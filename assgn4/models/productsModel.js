const fs = require('fs');
const productData = JSON.parse(fs.readFileSync('data/fakeProducts.json'));

exports.getAllProducts = () => {
   return productData;
};

exports.getProductById = (productId) => {
   return productData.find(product => product.id === productId);
};

exports.deleteProduct = (productId) => {
   const index = productData.findIndex(product => product.id === productId);

   if (index !== -1) {
      productData.splice(index, 1);
      return true;
   }

   return false;
};

exports.addProduct = (newProduct) => {
   const newProductId = productData.length + 1;
   const product = { id: newProductId, ...newProduct };
   productData.push(product);
   return product;
};
