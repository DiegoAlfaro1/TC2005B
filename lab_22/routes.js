const express = require('express');
const router = express.Router();
const uploadController = require('./uploadController');

router.get('/', uploadController.getForm);
router.post('/upload', uploadController.uploadFile);

module.exports = router;
