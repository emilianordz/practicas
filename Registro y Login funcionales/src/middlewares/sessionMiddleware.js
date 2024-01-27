function sessionMiddleware(req, res, next) {
    if (req.session.userLogged) {
        res.locals.session = req.session.userLogged;
    }
    next();
}

module.exports = sessionMiddleware;