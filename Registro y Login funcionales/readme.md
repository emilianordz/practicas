# Proyecto de Login y Registro

Este proyecto es una aplicación web de login y registro que utiliza sesiones para gestionar la autenticación de usuarios. La barra de navegación (navbar) cambia dinámicamente según si el usuario está logueado o no, mostrando información relevante en cada caso (Un saludo personalizado usando el "username", por ejemplo, botón de cierre de sesión).

## Funcionalidades

- **Registro de Usuarios:** Los usuarios pueden crear cuentas proporcionando su información básica.
- **Inicio de Sesión:** Los usuarios registrados pueden iniciar sesión con sus credenciales.
- **Gestión de Sesiones:** Se utilizan sesiones para mantener la autenticación del usuario durante su visita.
- **Navbar Dinámica:** La barra de navegación adapta su contenido según si el usuario está autenticado o no.

## Middlewares

- **Middleware de Autenticación (authMiddleware):** Verifica si un usuario ha iniciado sesión antes de permitir el acceso a determinadas rutas.
- **Validaciones de Inicio de Sesión (loginValidator):** Conjunto de reglas de validación para los datos ingresados durante el inicio de sesión de un usuario.
- **Middleware de Redirección si Logueado (redirectIfLogged):** Redirige a la página de perfil si un usuario logeado intenta acceder a las páginas de "registro" o "login".
- **Validaciones de Registro (registerValidator):** Conjunto de reglas de validación para los datos ingresados durante el registro de un usuario.
- **Middleware de Sesión (sessionMiddleware):** Verifica si hay una sesión de usuario activa y agrega la información de sesión a la variable 'res.locals.session' para que esté disponible en las vistas de la aplicación.

## Tecnologías Utilizadas

- Node.js
- JavaScript
- Express.js
- HTML
- CSS
- MySQL

## Dependencias

A continuación se enumeran las principales dependencias utilizadas en este proyecto:

- **bcrypt:** Biblioteca para el hash de contraseñas.
- **body-parser:** Middleware para analizar datos en el cuerpo de las solicitudes HTTP.
- **cookie-parser:** Middleware para analizar cookies en las solicitudes HTTP.
- **dotenv:** Módulo para cargar variables de entorno desde un archivo .env.
- **ejs:** Motor de plantillas para generar vistas HTML de manera dinámica.
- **express-session:** Middleware para gestionar sesiones de usuario en Express.
- **express-validator:** Middleware para validar datos de solicitudes en Express.
- **mysql:** Controlador para interactuar con bases de datos MySQL en Node.js.
- **mysql2:** Controlador moderno para bases de datos MySQL y MariaDB.
- **nodemon:** Herramienta para reiniciar automáticamente la aplicación al detectar cambios en los archivos.
- **sequelize:** ORM para Node.js, compatible con varias bases de datos relacionales.
- **sequelize-cli:** Herramienta de línea de comandos para Sequelize.

## Configuración del Proyecto

1. Copiar el archivo `.env.example` y renombrarlo a `.env`.
2. Modificar las variables de entorno en el archivo `.env` con la información correspondiente.

## Iniciar el Proyecto

Para levantar el proyecto, ejecutar el siguiente comando:

```bash
npm start
