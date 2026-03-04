//Crear un algoritmo que permita al usuario ingresar el largo y el
//ancho de un rectángulo, y calcular su perímetro y área.
const largo = Number(prompt("ingresa el largo"));
const ancho = parseInt(prompt("ingresa el ancho"));
console.log(largo)
console.log(ancho)
//cambio el tipo de dato de las variables
// largo = (largo);
// ancho = (ancho);
//calculo el area y perimetro
const perimetro = (largo + ancho) * 2; 
const area = largo * ancho;
document.writeln(`el perimetro es ${perimetro} y el area es ${area}`);
