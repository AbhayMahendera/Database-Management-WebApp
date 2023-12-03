const express = require('express');
const router = express.Router();
const authService = require('../services/authService');

router.post('/login', authService.login);

module.exports = router;
