//Ingresar la cantidad de productos en stock. Si el stock es mayor a 0, mostrar "Disponible"; de lo contrario, mostrar "Sin stock" en color rojo.

const stock = parseInt(prompt("Ingresa una cantidad de stock"));
const pantalla = document.getElementById("pantalla");

// if( stock > 0){
//     pantalla.innerHTML = 'Disponible'
// } else{
//     pantalla.innerHTML = '<span class="text-warning">Sin stock</span>'
// }

//operador ternario
// (condicion-logica) ? lo que quiero hacer si se cumple la condicion : lo que quiero hacer si No se cumple la condicion logica

stock > 0
  ? (pantalla.innerHTML = "Disponible")
  : (pantalla.innerHTML = '<span class="text-warning">Sin stock</span>');
