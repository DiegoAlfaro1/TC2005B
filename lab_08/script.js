const promArreglo = (arr) => {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }

  return sum / arr.length;
};

let array = [4, 10, 29, 20];

console.log("Promedio de arreglos: " + promArreglo(array));

const fs = require("fs");

function escribirArchivo(name, content) {
  fs.writeFile(name, content);
}

const content = "Laboratorio #8 TC2005B";
const name = "lab08.txt";
