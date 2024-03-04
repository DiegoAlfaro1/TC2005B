const express = require("express");
const router = express.Router();
const controladores = require('../controllers/laboratorio13.controller')

router.get("/",controladores.get_homePage );

router.get("/AboutMe", (request,response,next) =>{
  response.render("aboutMe")
})

router.get("/HireMe", (request,response,next) =>{
  response.render("hireMe")
})

router.get("/ConactMe",(request,response,next) =>{
  response.render("contactMe")})

module.exports = router;
