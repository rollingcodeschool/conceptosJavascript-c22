function saludar(){
    //todas las lineas de codigo que debe hacer esa funcion
    console.log('Hola mundo 🌎')
}

function saludarUsuario(nombreUsuario){
    const pantalla = document.getElementById('pantalla')
    pantalla.innerHTML += `<p>Hola ${nombreUsuario}</p>`
}
//invocar a una funcion
saludar()

console.log(1,2,3)
console.log(2026)

saludar()
saludar()

const usuario = prompt('Ingresa tu nombre')
saludarUsuario(usuario)