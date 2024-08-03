const express = require('express');
const authMiddleware = require('../middleware/auth');
const userService = require('../services/user');

const router = express.Router();

router.post('/cadastro', userService.add)
router.post('/login', userService.login)
router.post('/senha', userService.senha)

module.exports = router;
