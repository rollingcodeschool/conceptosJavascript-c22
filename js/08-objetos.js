// objeto: celular
//propiedades: marca, memoria, procesador, precio, color
//metodos: tomarFoto(), enviarMensaje()

//objeto: cancion
//propiedades: genero, duracion, cantante, anio, titulo
//metodos: reproducir(), pausar(), modificarVelocidad(velocidad)

//notacion literal
const pelicula = {
  //propiedades
  titulo: "toys story",
  genero: "animacion",
  duracion: "02:30",
  actores: ["Tom hanks", "actor 2", "actor 3"],
  anio: 1995,
  //   estudio: {
  //     nombre: 'pixar',
  //     anio: 1994
  //   },
  //metodos
  reproducir: function () {
    console.log("Comenzo la reproducción de la pelicula");
  },
  stop: () => {
    console.log("Se detuvo la pelicula");
  },
};

// const titulo = prompt('Ingresa un titulo de una canción')
// const artista = prompt('Ingresa el nombre del cantante/grupo')

// const cancion = {
//     //propiedad clave: valor
//     titulo, //atajo cuando la clave y la variable que contiene el valor se llama igual.
//     artista: artista
// }
// console.log(cancion)
console.log(pelicula);

//mostramos en pantalla un objeto
const pantalla = document.getElementById("pantalla");
pantalla.innerHTML = `<p>${pelicula}</p>`;
pantalla.innerHTML += `<p>Nombre de pelicula: ${pelicula.titulo}</p>`;
pantalla.innerHTML += `<p>Genero: ${pelicula["genero"]}</p>`;
// pantalla.innerHTML += `<p>Estudio: ${ pelicula.estudio.nombre }</p>`
// pantalla.innerHTML += `<p>Estudio: ${ pelicula.estudio.anio }</p>`
// pantalla.innerHTML += `<p>Estudio: ${ pelicula.estudio }</p>`
pantalla.innerHTML += `<p>Genero: ${pelicula["Genero"]}</p>`; // cuando la propiedad esta mal escrita vemos un undefined

// mostrar todas las propieades de un objeto for ... in
let textoPantalla = `<h3>Propiedades del objeto Pelicula</h3>`;
for (const propiedad in pelicula) {
  if (typeof pelicula[propiedad] !== "function") {
    const valor = pelicula[propiedad];
    textoPantalla += `<p>${propiedad}: ${valor}</p>`;
  }
}

pantalla.innerHTML += textoPantalla;
console.log(typeof "hola mundo");
console.log(typeof 20);
console.log(typeof pelicula);
console.log(typeof pelicula.anio);
console.log(typeof pelicula.titulo);
console.log(typeof pelicula.reproducir);
console.log(typeof pelicula.stop);
pantalla.innerHTML += `<hr>`;
//Como agregar una propiedad nueva al objeto
pantalla.innerHTML += `<p>Publicado : ${pelicula.publicado}</p>`;
pelicula.publicado = true;
pantalla.innerHTML += `<p>Publicado : ${pelicula.publicado}</p>`;

//Como modificar una propiedad del objeto
pelicula.anio = 1996;
pantalla.innerHTML += `<p>Año : ${pelicula.anio}</p>`;

//como eliminar una propiedad del objeto
delete pelicula.publicado;
pantalla.innerHTML += `<p>Publicado : ${pelicula.publicado ? "Si" : "No existe"}</p>`;
console.log(pelicula);
