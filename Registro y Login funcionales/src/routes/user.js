const express = require('express');
const userController = require('../controllers/userController');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const router = express.Router();

router.get('/login', sessionMiddleware, userController.login);
router.post('/login', sessionMiddleware, userController.auth);

router.get('/register', sessionMiddleware, userController.register);
router.post('/register', sessionMiddleware, userController.storeUser);

router.get('/profile', sessionMiddleware, userController.profile);

router.get("/logout", userController.logout);
router.post("/logout", userController.logout);

module.exports = router;