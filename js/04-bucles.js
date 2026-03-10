//while, do-while, for

const pantalla = document.getElementById('pantalla')

// while = mientras

// let contador = 1

// while( contador <= 50){
//     pantalla.innerHTML += `<p>Fila ${contador}</p>`
//     contador++ //contador = contador + 1
// }


// while( confirm('¿Queres realizar esta iteración?')){
//     pantalla.innerHTML += `<p>Fila impresa</p>`
//     console.log('se ejecuto el bucle while')
// }


let contador = 100

do{
    pantalla.innerHTML += `<p>Fila ${contador}</p>`
    contador++ //contador = contador + 1
}while( contador <= 50)
