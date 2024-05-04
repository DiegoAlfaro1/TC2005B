const express = require('express');
const router = express.Router();

const controladorUsuarios = require('../controllers/usuarios.controller');

router.get('/login',controladorUsuarios.get_login);
router.post('/login',controladorUsuarios.post_login);
router.get('/logout',controladorUsuarios.get_logout);

module.exports = router;