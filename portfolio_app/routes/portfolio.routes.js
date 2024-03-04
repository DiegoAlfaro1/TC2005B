const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
  response.render("homePage");
});

router.get("/AboutMe", (request,response,next) =>{
  response.render("aboutMe")
})

router.get("/HireMe", (request,response,next) =>{
  response.render("hireMe")
})

router.get("/ConactMe",(request,response,next) =>{
  response.render("contactMe")})

module.exports = router;
