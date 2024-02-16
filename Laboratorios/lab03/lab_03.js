// // 1:
// // Entrada: un número pedido con un prompt. Salida: Una tabla con los números
// del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir
// la salida

// function crearTabla(numero) {
//   console.log("Número | Cuadrado | Cubo");
//   console.log("-------|----------|------");

//   for (let i = 1; i <= numero; i++) {
//     const cuadrado = i * i;
//     const cubo = i * i * i;
//     console.log(`${i}\t| ${cuadrado}\t  | ${cubo}`);
//   }
// }

// const numero = prompt("Ingrese un número:");
// crearTabla(parseInt(numero));
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

function contador(arr1) {
  let neg = 0;
  let ceros = 0;
  let masCero = 0;

  for (let i = 0; i < arr1.length; i++) {
    const num = arr1[i];
    console.log(arr1[i]);

    if (num < 0) {
      neg++;
    } else if (num === 0) {
      ceros++;
    } else {
      masCero++;
    }
  }

  return { negativos: neg, ceros: ceros, mayoresACero: masCero };
}

// // 4:
// // Función: promedios. Parámetros: Un arreglo de arreglos de números.
// Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

const promedios = (arr) => {};

// // 5:
// // Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en
// orden inverso.
// // 6:
// // Crea una solución para un problema de tu elección (puede ser algo relacionad
//  con tus intereses, alguna problemática que hayas identificado en algún ámbito,
//  un problema de programación que hayas resuelto en otro lenguaje, un problema de la ACM,
//  entre otros). El problema debe estar descrito en un documento HTML, y la solución
//  implementada en JavaScript, utilizando al menos la creación de un objeto, el objeto
//  además de su constructor deben tener al menos 2 métodos. Muestra los resultados en el
//  documento HTML.
