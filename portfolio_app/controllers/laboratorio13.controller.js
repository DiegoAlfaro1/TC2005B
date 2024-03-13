const Contacto = require('../models/contactos.model')

exports.get_homePage = (request, response, next) => {
  response.render("homePage",{
    username: request.body.username || '',
  });
};

exports.get_aboutMe = (request,response,next) =>{
  response.render("aboutMe",{
    username: request.body.username || '',
  })
}


exports.get_hireMe = (request,response,next) =>{
  response.render("hireMe",{
    username: request.body.username || '',
  })
}

exports.get_contactMe = (request,response,next) =>{
  response.render("contactMe",{
    username: request.body.username || '',
  })
}

exports.post_contactme = (request,response,next) =>{
  const contacto = new Contacto(request.body.name,request.body.email)
  contacto.save();

  // response.setHeader('Set-Cookie', 'ultimo_contacto=' + request.body.name + ';HttpOnly');
  response.redirect("/contactadoPor");
}

exports.get_contactadoPor = (request,response,next) =>{
  response.render("contactadoPor",{
    contacto: Contacto.fetchAll(),
    username: request.session.username || '',
  });
}
