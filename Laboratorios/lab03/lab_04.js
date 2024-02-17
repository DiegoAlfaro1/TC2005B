// // 1:
// // Entrada: un número pedido con un prompt. Salida: Una tabla con los números
// del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir
// la salida

// var numero = parseInt(prompt("Ingrese un número:"));

// function crearTabla(numero) {
//   document.write("<table class='table table-striped table-hover'>");
//   document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

//   for (var i = 1; i <= numero; i++) {
//     var cuadrado = i * i;
//     var cubo = i * i * i;

//     document.write(
//       "<tr><td>" +
//         i +
//         "</td><td>" +
//         cuadrado +
//         "</td><td>" +
//         cubo +
//         "</td></tr>"
//     );
//   }
//   document.write("</table>");
// }

// crearTabla(numero);

// // 2:
// // Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados
// de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o
// incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.

// const num1 = Math.floor(Math.random() * 10) + 1;
// const num2 = Math.floor(Math.random() * 10) + 1;

// const tiempoInicio = new Date();
// let sumaFinal = Number(prompt(`${num1} + ${num2} = ?`));
// const tiempoFin = new Date();

// const tiempoTardado = tiempoFin - tiempoInicio;
// const segundosTardados = tiempoTardado / 1000;

// let a = num1 + num2;

// console.log(
//   a === sumaFinal
//     ? `Correcto el usuario tardó ${segundosTardados} segundos`
//     : `Incorrecto el usuario tardó ${segundosTardados} segundos`
// );

// // 3:
// // Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de
// números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores
// a 0 en el arreglo.

// function contador(arr1) {
//   let neg = 0;
//   let ceros = 0;
//   let masCero = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     const num = arr1[i];
//     console.log(arr1[i]);

//     if (num < 0) {
//       neg++;
//     } else if (num === 0) {
//       ceros++;
//     } else {
//       masCero++;
//     }
//   }

//   return { negativos: neg, ceros: ceros, mayoresACero: masCero };
// }

// // // 4:
// // // Función: promedios. Parámetros: Un arreglo de arreglos de números.
// // Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

// const promedios = (arr) => {
//   let subArr,
//     arrFinal = [];
//   for (let i = 0; i < arr.length; i++) {
//     subArr = arr[i];
//     let sum = 0;
//     for (let j = 0; j < subArr.length; j++) {
//       sum += subArr[j];
//     }
//     sum /= subArr.length;
//     arrFinal.push(sum);
//   }
//   return arrFinal;
// };

// var arregloDeArreglos = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(promedios(arregloDeArreglos));

// // 5:
// // Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en
// orden inverso.

// const inverso = (num) => {
//   let num1 = num.toString();
//   let final = num1.split("").reverse().join("");

//   return parseInt(final, 10);
// };

// console.log(inverso(123));

// // 6:
// // Crea una solución para un problema de tu elección (puede ser algo relacionad
//  con tus intereses, alguna problemática que hayas identificado en algún ámbito,
//  un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM,
//  entre otros). El problema debe estar descrito en un documento HTML, y la solución
//  implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto
//  además de su constructor deben tener al menos 2 métodos. Muestra los resultados en el
//  documento HTML.

//checar cuando le toca mantenimiento o lavado

let objFinal = {};

const eleccion_Servicio_Lavado = document.querySelector("#lavado-servicio");
const eleccion_marca = document.querySelector("#marcas");
const btnSubmit = document.querySelector("#button-1");
const fecha = document.querySelector("#fecha");

eleccion_Servicio_Lavado.addEventListener("change", function () {
  let opcionSeleccionada = eleccion_Servicio_Lavado.value;
  objFinal = { ...objFinal, seleccion: opcionSeleccionada };
});

eleccion_marca.addEventListener("change", function () {
  let opcionSeleccionada = eleccion_marca.value;
  objFinal = { ...objFinal, marca: opcionSeleccionada };
});

fecha.addEventListener("change", function () {
  let fechaSeleccionada = new Date(document.querySelector("#fecha").value);
  let fechaActual = new Date();
  let diffEnMilisegundos = fechaActual - fechaSeleccionada;
  let dias = Math.floor(diffEnMilisegundos / (1000 * 60 * 60 * 24));
  objFinal = { ...objFinal, diasSin: dias };
});

btnSubmit.addEventListener("click", function () {
  console.log(objFinal);
});

//una vez que se cheque si es lavado o mantenimiento usando el boton, se tiene que abrir un modal para indicar como esta le pedo si si o no
