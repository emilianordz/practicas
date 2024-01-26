const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/login', userController.login);
router.post('/login', userController.auth);
router.get('/register', userController.register);
router.post('/register', userController.storeUser);

router.get('/profile', userController.profile);

module.exports = router;