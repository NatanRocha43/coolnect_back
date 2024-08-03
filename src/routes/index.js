const express = require('express');
const userService = require('../services/user');

const router = express.Router();

router.post('/cadastro', userService.add)

module.exports = router;
