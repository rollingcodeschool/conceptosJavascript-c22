//Pedir al usuario un nombre y mostrarlo por pantalla

const nombre = prompt('Ingresa tu nombre:')
const apellido = prompt('Ingresa tu apellido:')
console.log( nombre )
console.log( apellido )

//mostrar un mensaje al usuario final
// alert(`El nombre ingresado es: ${nombre}, ${apellido}`)
document.open()
document.writeln(`El nombre ingresado es: ${nombre}, ${apellido}`)
document.close()
