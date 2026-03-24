const frutas = ['🍐','🍎','🍇']
const verduras = ['🍅','🥔']

// operador Spread ...
// const copiaFrutas = frutas // copia de la referencia de frutas

const listaCompras = [...frutas, ...verduras, '🍏']
console.log(listaCompras)
listaCompras.push('🍊')

console.log(frutas)
console.log(listaCompras)