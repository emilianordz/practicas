# Proyecto de Login y Registro

Este proyecto es una aplicación web de login y registro que utiliza sesiones para gestionar la autenticación de usuarios. La barra de navegación (navbar) cambia dinámicamente según si el usuario está logueado o no, mostrando información relevante en cada caso (Un saludo personalizado usando el "username" por ejemplo, boton de cerrado de sesión).

## Funcionalidades

- **Registro de Usuarios:** Los usuarios pueden crear cuentas proporcionando su información básica.
- **Inicio de Sesión:** Los usuarios registrados pueden iniciar sesión con sus credenciales.
- **Gestión de Sesiones:** Se utilizan sesiones para mantener la autenticación del usuario durante su visita.
- **Navbar Dinámica:** La barra de navegación adapta su contenido según si el usuario está autenticado o no.

## Tecnologías Utilizadas

- JavaScript
- Express.js
- Express-Session
- HTML
- CSS

## Dependencias

A continuación se enumeran las principales dependencias utilizadas en este proyecto:

- **bcrypt**: Biblioteca para el hash de contraseñas.
- **body-parser**: Middleware para analizar datos en el cuerpo de las solicitudes HTTP.
- **cookie-parser**: Middleware para analizar cookies en las solicitudes HTTP.
- **ejs**: Motor de plantillas para generar vistas HTML de manera dinámica.
- **express-session**: Middleware para gestionar sesiones de usuario en Express.
- **mysql**: Controlador para interactuar con bases de datos MySQL en Node.js.
- **nodemon**: Herramienta para reiniciar automáticamente la aplicación al detectar cambios en los archivos.
- **sequelize**: ORM para Node.js, compatible con varias bases de datos relacionales.
- **sequelize-cli**: Herramienta de línea de comandos para Sequelize.

Para instalar estas dependencias, ejecutar el siguiente comando:

```bash
npm install