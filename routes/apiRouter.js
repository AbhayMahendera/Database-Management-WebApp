const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');


router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.delete('/users/:id', usersController.deleteUser);
router.post('/users', usersController.addUser);





module.exports = router;
