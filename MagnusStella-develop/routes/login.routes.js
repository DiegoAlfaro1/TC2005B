const express = require("express");
const router = express.Router();
const controladores = require("../controllers/usuarios.controller");

router.get("/login", controladores.get_login);
router.post("/login", controladores.post_login);
router.get('/logout', controladores.get_logout);

module.exports = router;
