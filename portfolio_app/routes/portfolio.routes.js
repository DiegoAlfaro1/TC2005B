const express = require("express");
const router = express.Router();
const controladores = require('../controllers/laboratorio13.controller')

router.get("/",controladores.get_homePage );

router.get("/AboutMe",controladores.get_aboutMe )

router.get("/HireMe", controladores.get_hireMe)

router.get("/ContactMe",controladores.get_contactMe)
router.post('/ContactMe',controladores.post_contactme);




module.exports = router;
