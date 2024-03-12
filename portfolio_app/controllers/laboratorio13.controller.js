const fs = require("fs");
const { request } = require("http");

const Contacto = require('../models/contactos.model')

exports.get_homePage = (request, response, next) => {
  response.render("homePage");
};

exports.get_aboutMe = (request,response,next) =>{
  response.render("aboutMe")
}


exports.get_hireMe = (request,response,next) =>{
  response.render("hireMe")
}

exports.get_contactMe = (request,response,next) =>{
  response.render("contactMe")
}

exports.post_contactme = (request,response,next) =>{
  const contacto = new Contacto(request.body.name,request.body.email)
  contacto.save();

  response.setheader('Set-Cookie', 'nombre_cookie=' + request.body.name + '; HttpOnly');
  response.redirect("/contactadoPor");
}

exports.get_contactadoPor = (request,response,next) =>{
  response.render("contactadoPor",{
    contacto: Contacto.fetchAll(),
  });
}

exports.accion = (request,response,next) => {
}
