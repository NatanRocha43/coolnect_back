const express = require('express');
const authMiddleware = require('../middleware/auth');

const userService = require('../services/user');
const eventService = require('../services/event');

const router = express.Router();

router.post('/cadastro', userService.add)
router.post('/login', userService.login)
router.post('/senha', userService.senha)

router.post('/evento', authMiddleware, eventService.add)
router.post('/evento/curtir', authMiddleware, eventService.curtir)

module.exports = router;
