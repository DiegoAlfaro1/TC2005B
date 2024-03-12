const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

const routasUsuarios = require("./routes/usuarios.routes");
app.use("/users",routasUsuarios);

const routasPortfolio = require("./routes/portfolio.routes");
app.use("/", routasPortfolio);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, "views", "404.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
