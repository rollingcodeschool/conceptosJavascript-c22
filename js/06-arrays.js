// declarar un array vacio

const frutas = [];

console.info(typeof frutas);

//declarar un array con datos
const peliculas = [
  "lalaland",
  "toy story",
  "Buscando a nemo",
  2010,
  true,
  "era del hielo",
  "Jurassic Park",
];
console.log(peliculas);
console.log(frutas);

//podemos saber cuantos elementos tiene el array
const pantalla = document.getElementById("pantalla");
pantalla.innerHTML = `<p>El array de peliculas tiene ${peliculas.length} elementos</p>`;
//accedemos a una posicion particular del array
pantalla.innerHTML += `<p>El primer elemento del array de peliculas es ${peliculas[0]}</p>`;
pantalla.innerHTML += `<p>El ultimo elemento del array de peliculas es ${peliculas[peliculas.length - 1]}</p>`;

//mostrar los elementos del array
pantalla.innerHTML += peliculas

let listaPeliculas = '<ul>'
for(let i=0; i < peliculas.length; i++){
    listaPeliculas += `<li>${peliculas[i]}</li>`
}
listaPeliculas += '</ul>'

pantalla.innerHTML += listaPeliculas

pantalla.innerHTML += `<p>El elemento del a posicion 10 del array de peliculas es ${peliculas[10]}</p>`;
