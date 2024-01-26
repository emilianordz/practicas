const bcrypt = require('bcrypt');
const db = require('../database/models')

function login(req, res) {
    res.render('login');
}

function register(req, res) {
    res.render('register');
}

async function storeUser(req, res) {
    let data = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    };
    console.log(data);
    let newUser = await db.User.create(data);
    req.session.userLogged = newUser;

    return res.redirect('/');
}

async function auth(req, res) {
    let user = await db.User.findOne({
        where: {
            username: req.body.username,
        },
    });
    if (user) {
        let passOk = bcrypt.compareSync(req.body.password, user.password);
        if (passOk) {
            req.session.userLogged = user;
            req.session.lastActivity = Date.now();
            if (req.body.rememberMe) {
                res.cookie("userId", user.id, { maxAge: 1000 * 60 * 5 });
            }
            return res.redirect('/profile');
        } else {
            return res.status(401).send('Credenciales incorrectas');
        }
    } else {
        return res.status(404).send('Usuario no encontrado');
    }
}

async function profile(req, res){
    try {
      const user = await db.User.findByPk(req.session.userLogged.id, {
        attributes: { exclude: ['password'] }
      });
      res.render('profile', { user: user.dataValues });
    } catch (error) {
      console.log(error)
    }
  }

module.exports = {
    login,
    register,
    storeUser,
    auth,
    profile
}