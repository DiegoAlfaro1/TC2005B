const express = require("express");
const router = express.Router();
const controladores = require('../controllers/controlador.controller');

router.get("/", controladores.get_homepage);

module.exports = router;