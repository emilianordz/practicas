// Importa la biblioteca Express
const express = require('express');

const { check } = require("express-validator");

// Importa el controlador de usuario
const userController = require('../controllers/userController');

// Importa el middleware para la gestión de sesiones
const sessionMiddleware = require('../middlewares/sessionMiddleware');

// Importa el middleware que impide el acceso a las rutas "register" o "login" desde una cuenta registrada sin cerrar sesión
const redirectIfLogged = require("../middlewares/redirectIfLogged");

// Importa el middleware que impide el acceso a la ruta "profile" sin haber iniciado sesión en una cuenta existente o registrada
const authMiddleware = require("../middlewares/authMiddleware");

// Importa el middleware 'registerValidator' que realiza la validación de datos durante el proceso de registro
const registerValidator = require("../middlewares/registerValidator");

// Importa el middleware 'loginValidator' que realiza la validación de datos durante el proceso de inicio de sesión
const loginValidator = require("../middlewares/loginValidator");

// Crea una instancia de un enrutador de Express
const router = express.Router();

// Rutas para el proceso de inicio de sesión
router.get('/login', redirectIfLogged, sessionMiddleware, userController.login);
router.post('/login', loginValidator, sessionMiddleware, userController.auth);

// Rutas para el proceso de registro de usuario
router.get('/register', redirectIfLogged, sessionMiddleware, userController.register);
router.post('/register', registerValidator, sessionMiddleware, userController.storeUser);

// Ruta para el perfil del usuario, requiere autenticación de sesión
router.get('/profile', authMiddleware, sessionMiddleware, userController.profile);

// Rutas para el proceso de cierre de sesión
router.get("/logout", userController.logout);
router.post("/logout", userController.logout);

// Exporta el enrutador para que pueda ser utilizado en otros archivos
module.exports = router;
