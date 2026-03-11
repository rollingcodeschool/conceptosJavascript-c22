/*
Cree un programa al estilo de un cajero automático con las siguientes opciones:
1- consultar el saldo
2- ingresar dinero
3- extraer dinero 
*/
let saldo = 10000;

do {
  const opcion = prompt(
    "Ingresa una opción: 1- consultar el saldo, 2- ingresar dinero, 3- extraer dinero",
  );
  const pantalla = document.getElementById("pantalla");

  switch (opcion) {
    case "saldo":
    case "SALDO":
    case "1":
      //aqui agrego todas las lineas necesarias si la opcion es '1'
      pantalla.innerHTML += `<p>Tu saldo actual es $${saldo}</p>`;
      console.log(`Tu saldo actual es $${saldo}`)
      break;
    case "2":
      const deposito = parseFloat(
        prompt("Agrega el dinero que quieres ingresar en tu cuenta"),
      );
      saldo += deposito; //saldo = saldo + deposito
      pantalla.innerHTML += `<p>Ingresaste $${deposito}, Tu saldo actual es $${saldo}</p>`;
      console.log(`Ingresaste $${deposito}, Tu saldo actual es $${saldo}`)
      break;
    case "3":
      const montoExtraer = parseFloat(
        prompt("Ingresa el monto que quieres extraer"),
      );
      if (montoExtraer <= saldo) {
        saldo -= montoExtraer; //saldo = saldo - montoExtraer
        pantalla.innerHTML += `<p>Retiraste $${montoExtraer}, Tu saldo actual es $${saldo}</p>`;
         console.log(`Retiraste $${montoExtraer}, Tu saldo actual es $${saldo}`)
      } else {
        alert("Fondos insuficientes");
      }
      break;
    default:
      //aqui agrego todas las lineas de codigo si la opcion ingresada no corresponde con ningun caso anterior
      alert("Ingresaste una opción erronea");
  }
} while (confirm("¿Queres realizar otra operación?"));

//! ejemplo de if anidados, debo evitar esa estructura

// if(opcion === '1'){
//     alert('aqui el usuario consulta el saldo')
// }else if(opcion === '2'){
//     alert('aqui tengo que ingresar el dinero')
// } else if(opcion === '3'){
//      alert('aqui tengo que extraer el dinero')
// } else{
//      alert('Ingresaste una opción erronea')
// }
