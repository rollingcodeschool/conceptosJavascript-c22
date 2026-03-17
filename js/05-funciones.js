function saludar() {
  //todas las lineas de codigo que debe hacer esa funcion
  console.log("Hola mundo 🌎");
  return "Hola mundo 🌎"
}



// funcion con valor de retorno
// function calcularDescuento(precio, descuento) {
// //   const total = 
//   return precio - (precio * descuento) / 100;
// }

function saludarUsuario(nombreUsuario, edad = 20) {
  const pantalla = document.getElementById("pantalla");
  pantalla.innerHTML += `<p>Hola ${nombreUsuario}, tienes ${edad} años</p>`;
  console.log(`Hola ${nombreUsuario}, tienes ${edad} años`);
}

// Expresion de function
// const calcularDescuento = function (precio, descuento){
//  return precio - (precio * descuento) / 100;
// }

// arrow function
const calcularDescuento = (precio, descuento) => precio - (precio * descuento) / 100;


//invocar a una funcion
saludar();

console.log(1, 2, 3);
console.log(2026);

saludar();
saludar();

// do{
//     const usuario = prompt('Ingresa tu nombre')
//     const edad = prompt('Ingresa tu edad')
//     saludarUsuario(usuario, edad)
     saludarUsuario('Maria Belen')

// }while(confirm('¿Queres realizar otra operacion?'))

const precio = parseFloat(prompt("Ingresa el precio del producto"));
const descuento = parseInt(prompt("Ingresa el porcetanje de descuento"));

const total = calcularDescuento(precio, descuento);

const pantalla = document.getElementById("pantalla");
pantalla.innerHTML += `<p>El precio del producto es $${precio}, el descuento aplicado es de ${descuento}%, el total a pagar es $${total}</p>`;

pantalla.innerHTML += `<p>El precio del producto es $3000, el descuento aplicado es de 50%, el total a pagar es $${calcularDescuento(3000,50)}</p>`;


