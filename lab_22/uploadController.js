const multer = require('multer');
const path = require('path');

// Configuración de Multer
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // límite de tamaño de archivo en bytes
}).single('photo');

exports.getForm = (req, res) => {
  res.render('uploadForm', { msg: null, file: null });
};


exports.uploadFile = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render('uploadForm', { msg: err, file: null });
    } else {
      if (!req.file) {
        res.render('uploadForm', { msg: 'Error: No file selected!', file: null });
      } else {
        res.render('uploadForm', { msg: 'File uploaded successfully!', file: `uploads/${req.file.filename}` });
      }
    }
  });
};
