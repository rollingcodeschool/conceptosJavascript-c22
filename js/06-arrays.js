const mostrarPeliculas = (notas) => {
  pantalla.innerHTML += `<h2>Lista de peliculas - elementos ${peliculas.length}</h2>`;
  pantalla.innerHTML += `<p class='text-muted small'>Notas: ${notas}</p>`;
  let listaPeliculas = "<ul>";
  for (let i = 0; i < peliculas.length; i++) {
    listaPeliculas += `<li>${i+1}- ${peliculas[i]}</li>`;
  }
  listaPeliculas += "</ul>";

  pantalla.innerHTML += listaPeliculas;
};

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
pantalla.innerHTML += peliculas;
pantalla.innerHTML += `<p>El elemento del a posicion 10 del array de peliculas es ${peliculas[10]}</p>`;

mostrarPeliculas('Este es el arreglo orginal')

// como agregar elementos en el array
peliculas.unshift("Super Mario Bros. La pelicula", "Shrek");
mostrarPeliculas('Agregamos dos elementos al inicio del array')

peliculas.push('Star Wars: El Regreso del Jedi', 'El Mundo Perdido: Jurassic Park' )
mostrarPeliculas('Agregamos dos elementos al final del array')

peliculas.splice(5,0,'Oppenheimer')
mostrarPeliculas('Agregamos un elemento en el medio del array')