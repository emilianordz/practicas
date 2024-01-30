// Middleware de sesión (sessionMiddleware)
// Verifica si hay una sesión de usuario activa y agrega la información de sesión a la variable 'res.locals.session'
// para que esté disponible en las vistas de la aplicación.

function sessionMiddleware(req, res, next) {
    // Verifica si hay una sesión de usuario activa
    if (req.session.userLogged) {
        // Agrega la información de sesión a 'res.locals.session' para que esté disponible en las vistas
        res.locals.session = req.session.userLogged;
    }

    // Permite el paso a la siguiente función en la cadena de middleware
    next();
}

// Exporta el middleware de sesión para que pueda ser utilizado en otros archivos
module.exports = sessionMiddleware;
