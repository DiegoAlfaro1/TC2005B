const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const session = require('express-session');


const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination: (reques,file,callback) => {
        callback(null,'public/uploads');
    },
    filename: (request,file,callback) => {
        callback(null, new Date().toISOString() + '-' + file.originalname);
    },
});

app.use(multer({storage: fileStorage}).single('imagen'));

const rutas = require('./routes/rutas.routes');

app.use("/", rutas);

app.use((request,response,next) => {
    response.status(404);
    response.render("404", {titulo: 'Error 404'})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${PORT}`)
});