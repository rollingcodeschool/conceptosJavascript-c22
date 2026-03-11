// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const pantalla = document.getElementById("pantalla");
const filas = parseInt(prompt("Ingresa un número de filas"));

let tabla = `<table class="table table-striped"><tbody>`;

for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  tabla += `<tr>
                <td>1</td>
                <td>2</td>
            </tr>`;
}

tabla += `</tbody></table>`;

pantalla.innerHTML = tabla;
