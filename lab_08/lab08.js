const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
  let filePath;

  // Manejar la ruta de solicitud para archivos CSS y SVG
  if (request.url === "/styles.css") {
    filePath = path.join(__dirname, "styles.css");
  } else if (request.url === "/food-dish-svgrepo-com.svg") {
    filePath = path.join(__dirname, "food-dish-svgrepo-com.svg");
  } else {
    filePath = path.join(__dirname, "lab06.html");
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // Manejo de errores
      console.error(err);
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("Error interno del servidor");
      return;
    }

    // Determinar el tipo de contenido en función de la extensión del archivo
    const extname = path.extname(filePath);
    let contentType = "text/html";

    if (extname === ".css") {
      contentType = "text/css";
    } else if (extname === ".svg") {
      contentType = "image/svg+xml";
    }

    response.writeHead(200, { "Content-type": contentType });
    response.end(data);
  });
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
