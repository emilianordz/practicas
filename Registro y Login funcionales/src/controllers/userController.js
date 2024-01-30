// Importa la biblioteca 'bcrypt' para el hashing y la comparación de contraseñas
const bcrypt = require('bcrypt');
// Importa el objeto 'db' que contiene los modelos de la base de datos
const db = require('../database/models');

const { validationResult } = require('express-validator');

// Función para renderizar la vista de inicio de sesión
function login(req, res) {
    res.render('login');
}

// Función para renderizar la vista de registro de usuario
function register(req, res) {
    res.render('register');
}

// Función para almacenar un nuevo usuario en la base de datos
async function storeUser(req, res) {
     // Validacion de datos ingresados
     let errores = validationResult(req);

     // En caso de tener errores, retorna a la vista
     if (!errores.isEmpty()) {
       let errors = errores.mapped();
       return res.render("register", { errors: errors, olds: req.body });
     }
    // Se obtienen los datos del formulario de registro
    let data = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10) // Se hashea la contraseña antes de almacenarla
    };

    console.log(data);

    // Se crea un nuevo usuario en la base de datos
    let newUser = await db.User.create(data);

    // Se establece la sesión del usuario registrado
    req.session.userLogged = newUser;

    return res.redirect('/');
}

// Función para autenticar a un usuario durante el inicio de sesión
async function auth(req, res) {
    // Validacion de datos ingresados
    let errores = validationResult(req);

    // En caso de tener errores, retorna a la vista
    if (!errores.isEmpty()) {
      let errors = errores.mapped();
      return res.render("login", { errors: errors, olds: req.body });
    }
    
    // Se busca al usuario en la base de datos por su nombre de usuario
    let user = await db.User.findOne({
        where: {
            username: req.body.username,
        },
    });

    if (user) {
        // Se verifica la contraseña con la almacenada en la base de datos
        let passOk = bcrypt.compareSync(req.body.password, user.password);

        if (passOk) {
            // Si es correcta, se establece la sesión del usuario
            req.session.userLogged = user;
            req.session.lastActivity = Date.now();

            // Se establece una cookie si se selecciona "recordarme"
            if (req.body.rememberMe) {
                res.cookie("userId", user.id, { maxAge: 1000 * 60 * 5 });
            }

            return res.redirect('/profile');
        } else {
            // Prompt datos incorrectos
        return res.render("login", {
            errors: {
              password: {
                msg: "Datos ingresados incorrectos.",
              },
            },
            olds: req.body,
          });
        }
      } else {
        return res.render("login", {
          errors: { username: { msg: "Datos ingresados incorrectos", olds: req.body } },
        })
    }
}

// Función para renderizar la vista de perfil del usuario
async function profile(req, res) {
    try {
        // Se obtiene el usuario actual excluyendo la contraseña
        const user = await db.User.findByPk(req.session.userLogged.id, {
            attributes: { exclude: ['password'] }
        });
        res.render('profile', { user: user.dataValues });
    } catch (error) {
        console.log(error);
    }
}

// Función para cerrar la sesión del usuario
function logout(req, res) {
    req.session.destroy();
    res.clearCookie("userId");
    return res.redirect("/login");
}

// Exporta todas las funciones
module.exports = {
    login,
    register,
    storeUser,
    auth,
    profile,
    logout
};
