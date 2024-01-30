// Importa la función 'body' de 'express-validator' para realizar validaciones en los datos del formulario
const { body } = require('express-validator')

//Validaciones de registro, se define un conjunto de reglas de validación para los datos ingresados durante el registro de un usuario

const registerValidator = [
    body('username')
        .notEmpty()
        .withMessage('Este campo es obligatorio'),

    body('email')
        .isEmail()
        .withMessage('Ingrese una casilla de E-Mail valida')
        .notEmpty()
        .withMessage('Este campo es obligatorio'),

    body('password')
        .notEmpty()
        .withMessage('Este campo es obligatorio')
        .isLength({ min: 6 })
        .withMessage('Su contraseña debe tener 6 caracteres como minimo'),
];

// Exporta el conjunto de reglas de validación para el registro
module.exports = registerValidator