const Usuarios = require("../models/usuarios.model");

exports.get_login = (request, response, next) => {
    response.render("login")
};

exports.post_login = (request, response, next) => {
    console.log(request.body);
    const usuarios = new Usuarios(request.body.name, request.body.password);
    usuarios.save();
    
    request.session.username = request.body.username;
    response.redirect('/');
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login');
    });
};