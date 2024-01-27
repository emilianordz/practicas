const express = require('express');
const path = require('path');
const myconnection = require('express-myconnection');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes/user');
const sessionMiddleware = require("./middlewares/sessionMiddleware");

const app = express();
app.set('port', 4000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'practicadb'
}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(sessionMiddleware);

app.listen(app.get('port'), () => {
    console.log("Servidor iniciado en puerto", app.get('port'));
});


app.use('/', routes);

app.get('/', (req, res) => {
    res.render('home');
});