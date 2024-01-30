// Importa las bibliotecas necesarias

const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

// Importa las rutas definidas en el archivo 'user.js'

const routes = require('./routes/user');

// Importa el middleware para la gestión de sesiones

const sessionMiddleware = require("./middlewares/sessionMiddleware");

// Crea una instancia de la aplicación Express

const app = express();

// Configura el puerto de la aplicación obteniéndolo de las variables de entorno

app.set('port', process.env.PORT);

// Configura la carpeta de vistas y el motor de plantillas EJS

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configura Express para servir archivos estáticos desde la carpeta 'public'

app.use(express.static('public'));

// Configura Express para analizar datos de formularios en solicitudes HTTP

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Configura Express para utilizar sesiones

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Aplica el middleware de gestión de sesiones

app.use(sessionMiddleware);

// Configura Express para escuchar en el puerto especificado

app.listen(app.get('port'), () => {
    console.log("Servidor iniciado en el puerto", app.get('port'), "Ingrese a http://localhost:" + app.get('port'));
});

// Utiliza las rutas definidas en 'user.js' para manejar las solicitudes en la raíz ('/')

app.use('/', routes);

// Maneja solicitudes GET en la raíz ('/') y renderiza la vista 'home.ejs'

app.get('/', (req, res) => {
    res.render('home');
});