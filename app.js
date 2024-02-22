console.log("Hola");

const filesystem = require("fs");

filesystem.writeFileSync("hola.txt", "hola desde node");

const arreglo = [10000, 2389, 12389, 902, 18, 832, 1823];

for (let i of arreglo) {
  setTimeout(() => {
    console.log(i);
  }, i);
}

const te_hackie = () => {
  console.log("jeje te hackie");
};

setTimeout(te_hackie, 7000);

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request);
  //   response.end();
});

server.listen(3000);
