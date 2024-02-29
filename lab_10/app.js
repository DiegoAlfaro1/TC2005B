const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    response.setHeader("Content-Tyep", "text/html");
    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Laboratorio 10</title>
        </head>
        <body><h1>Esta es la ruta home del lab 10</h1></body>
        </html>
        `);
    response.end();
  } else if (request.url == "/ruta1") {
    response.setHeader("Content-Tyep", "text/html");
    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Laboratorio 10</title>
        </head>
        <body><h1>Esta es la ruta 1 del lab 10</h1></body>
        </html>
        `);
    response.end();
  } else if (request.url == "/ruta2") {
    response.setHeader("Content-Tyep", "text/html");
    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Laboratorio 10</title>
        </head>
        <body><h1>Esta es la ruta 2 del lab 10</h1></body>
        </html>
        `);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html");
    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Laboratorio 10</title>
        </head>
        <body><h1>Error 404!!</h1></body>
        </html>
        `);
    response.end();
  }
});

server.listen(3000);
