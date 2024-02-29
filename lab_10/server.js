const http = require("http");
const fs = require("fs");
const path = require("path");

function handleRequest(request, response, htmlFileName = "index.html") {
  let filePath;

  if (request.url === "/styles.css") {
    filePath = path.join(__dirname, "styles.css");
  } else if (request.url === "/food-dish-svgrepo-com.svg") {
    filePath = path.join(__dirname, "food-dish-svgrepo-com.svg");
  } else {
    filePath = path.join(__dirname, htmlFileName);
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("Internal Server Error");
      return;
    }

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
}

const server = http.createServer((request, response) => {});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
