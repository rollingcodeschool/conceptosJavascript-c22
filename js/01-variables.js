//Esto es un comentario de una sola linea

/* 
Esto es un comentario
de multiples
lineas
*/

//Declarar una variable (let - const - var)

let nombre = "Dante S.";
const apellido = "Pereyra";

//mostrar un mensaje en consola
console.log(nombre);
console.log("Variable apellido: ", apellido);

//modificar el contenido de una variable
nombre = "Fatima";

//nunca podemos actualizar el valor de una constante
//apellido = "Arias" //esto da error
console.log(nombre);

// Tipos de datos que puedo almacenar en una variable
//string
const saludo = `Hola mundo`;
//number
const edad = 25;
const negativo = -25;
const precio = 25.5;
//boolean
let encendido = true;
let lavado = false;
//null
let alcancia = null;
//undefined
let anio;

console.log("Ejemplo de string: " + saludo);
// console.log("Ejemplo de valores numerico: edad =" + edad + ' negativo=' + negativo + ' precio='+ precio);
console.log(
  `Ejemplo de valores numerico: edad =${edad} negativo=${negativo} precio=${precio}`,
);
console.log(
  `Ejemplo de valores booleanos: encendido =${encendido} lavado=${lavado}`,
);
console.log(alcancia);
console.log(anio);

anio = 2026;
console.log(anio);
