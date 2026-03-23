const mostrarPeliculas = (notas) => {
  pantalla.innerHTML += `<h2>Lista de peliculas - elementos ${peliculas.length}</h2>`;
  pantalla.innerHTML += `<p class='text-muted small'>Notas: ${notas}</p>`;
  let listaPeliculas = "<ul>";
  for (let i = 0; i < peliculas.length; i++) {
    listaPeliculas += `<li>${i + 1}- ${peliculas[i]}</li>`;
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
  "jurassic Park",
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

mostrarPeliculas("Este es el arreglo orginal");

// como agregar elementos en el array
peliculas.unshift("Super Mario Bros. La pelicula", "Shrek");
mostrarPeliculas("Agregamos dos elementos al inicio del array");

peliculas.push(
  "Star Wars: El Regreso del Jedi",
  "El Mundo Perdido: Jurassic Park",
);
mostrarPeliculas("Agregamos dos elementos al final del array");

peliculas.splice(5, 0, "Oppenheimer");
mostrarPeliculas("Agregamos un elemento en el medio del array");

//modificar un elemento del array
peliculas[6] = "Jurassic World: Mundo Jurásico";
mostrarPeliculas("Modificamos el elemento de la posicion 6 del array");

//eliminar elementos del array
peliculas.shift();
mostrarPeliculas("Eliminamos el primer elemento del array");

peliculas.pop();
mostrarPeliculas("Eliminamos el ultimo elemento del array");

peliculas.splice(6, 1);
// peliculas.splice(6) //borra todos los elementos desde la posicion 6 del array
mostrarPeliculas("Eliminamos el elemento de la posicion 6 del array");

// filtrar las pelis de jurassic park
console.log(peliculas[5].includes("jurassic"));
console.log(peliculas[5].includes("Jurassic"));
console.log(peliculas[5].toUpperCase().includes("JURASSIC"));

//agrego una nueva peli
peliculas.push("El Mundo Perdido: Jurassic Park");
const peliculasFiltradas = peliculas.filter((pelicula) =>
  pelicula.toLowerCase().includes("jurassic"),
);
console.log(peliculas);
console.log(peliculasFiltradas);

const aniosEstreno = [2010, 2000, 2010, 2020, 2014, 2025];

const arrayFiltrado = aniosEstreno.filter((item)=> item >= 2014)
console.log(arrayFiltrado)

// método map
pantalla.innerHTML += `<h2>Pelicas de Jurassic Park 🦖</h2>`

const itemsLista = peliculasFiltradas.map((item) => `<li>${item}</li>`).join(' ')
pantalla.innerHTML += `<ul>${itemsLista}</ul>`;

// metodo find
const peliBuscada = peliculas.find((peli)=> peli === 'toy story' )
const peliBuscada2 = peliculas.find((peli)=> peli === 'top gun' )
console.log(peliBuscada)
console.log(peliBuscada2)

// metodo findIndex
const posicionToyStory = peliculas.findIndex((peli)=> peli.toLowerCase() === 'toy story' )
const posiciontopGun = peliculas.findIndex((peli)=> peli === 'top gun' )
console.log('La peli toy story esta en la posicion: '+ posicionToyStory)
console.log('La peli top gun esta en la posicion: '+ posiciontopGun)