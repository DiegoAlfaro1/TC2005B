const fs = require("fs")

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
  console.log(request.body);
  const dataToWrite = JSON.stringify(request.body,null,2);
  fs.appendFile("PostDatos.txt", dataToWrite + '\n', (err) => {
    if(err){
      console.log("Error")
    }
  })
  response.redirect("/")
}