const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const productsController = require('../controllers/productsController');

router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.delete('/users/:id', usersController.deleteUser);
router.post('/users', usersController.addUser);

router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProductById);
router.delete('/products/:id', productsController.deleteProduct);
router.post('/products', productsController.addProduct);

module.exports = router;
