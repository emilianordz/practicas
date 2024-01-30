//Middleware de redireccion,
//si un usuario logeado quiere ingresar a "registro" o "login" sin hacer logout sera dirigido a "profile"

const redirectIfLogged = (req, res, next) => {
  // Verifica si existe una sesión de usuario activa
  if (req.session.userLogged) {
      // Redirige al perfil del usuario si ya ha iniciado sesión
      return res.redirect("/profile");
  }

  // Permite el paso a la siguiente función en la cadena de middleware si no hay sesión de usuario activa
  next();
};

// Exporta el middleware para redirección si el usuario ya ha iniciado sesión
module.exports = redirectIfLogged;