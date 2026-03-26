const carrito = [
  { nombre: "teclado", precio: 250000 },
  { nombre: "mouse", precio: 200000 },
  { nombre: "Monitor", precio: 550000 },
];

const total = carrito.reduce((acumulador, producto)=> acumulador + producto.precio, 0)
console.log(carrito)
console.log(total)