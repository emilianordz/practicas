// Importa la función 'body' de 'express-validator' para realizar validaciones en los datos del formulario
const { body } = require('express-validator')

//Validaciones de login, se define un conjunto de reglas de validación para los datos ingresados durante el logueo de un usuario

const loginValidator = [
    body('username')
        .notEmpty()
        .withMessage('Ingresa tu nombre de usuario para continuar'),

    body('password')
        .notEmpty()
        .withMessage('Ingresa tu contraseña para continuar')
]

// Exporta el conjunto de reglas de validación para el inicio de sesión
module.exports = loginValidator;