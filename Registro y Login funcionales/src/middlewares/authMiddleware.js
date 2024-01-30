// Middleware de autenticación (authMiddleware)
// Verifica si un usuario ha iniciado sesión antes de permitir el acceso a determinadas rutas
const authMiddleware = (req, res, next) => {
  // Verifica si no existe una sesión de usuario activa
  if (!req.session.userLogged) {
      // Redirige a la página de inicio de sesión si no hay una sesión de usuario activa
      return res.redirect("/login");
  }

  // Si hay una sesión de usuario activa, permite el paso a la siguiente función en la cadena de middleware
  next();
};

// Exporta el middleware de autenticación para que pueda ser utilizado en otros archivos
module.exports = authMiddleware;
