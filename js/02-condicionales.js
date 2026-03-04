//Determinar si un número es par o impar: Crear un algoritmo que permita al usuario ingresar un número y determinar si es par o impar. Mostrar el resultado.
const pantalla = document.getElementById("pantalla");
console.log(pantalla);
// Ejemplo de como mostrar texto en el div creado en el index.html
// document.writeln(`el perimetro es sdfsdf`);
// pantalla.innerHTML = `<p>el perimetro es sdfsdf</p>`
// pantalla.innerHTML =  pantalla.innerHTML + `<p>este es el segundo parrafo</p>`
// pantalla.innerHTML += `<p>este es el segundo parrafo</p>`

const num = parseInt(prompt("Ingresa un número"));
console.log(num);
console.log(isNaN(num));
//voy a preguntar si lo que ingrese no es un numero (isNaN), entonces muestro un cartel de error, caso contrario si es un número entonces hago la operacion que ya sabia hacer
// el operador logico que signifa Y = AND => &&
// el operador logico que signifa O = OR => ||
if (isNaN(num) || num <= 0) {
  pantalla.innerHTML = `<p>Ingresaste un valor erroneo</p>`;
} else if (num % 2 === 0) {
  pantalla.innerHTML = `<p>El número ingresado: ${num}  es par  </p>`;
} else {
  pantalla.innerHTML = `<p>El número ingresado: ${num}  es impar  </p>`;
}
