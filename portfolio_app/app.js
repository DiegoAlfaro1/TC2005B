const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
const path = require("path");

app.use(express.static(path.join()));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

const routasPortfolio = require("./routes/portfolio.routes"); //cambiar por mi routes

app.use("/", routasPortfolio);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
