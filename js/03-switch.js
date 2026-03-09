/*
Cree un programa al estilo de un cajero automático con las siguientes opciones:
1- consultar el saldo
2- ingresar dinero
3- extraer dinero 
*/

const opcion = prompt(
  "Ingresa una opción: 1- consultar el saldo, 2- ingresar dinero, 3- extraer dinero",
);
const pantalla = document.getElementById("pantalla");
let saldo = 10000;

// if(opcion === '1'){
//     alert('aqui el usuario consulta el saldo')
// }else if(opcion === '2'){
//     alert('aqui tengo que ingresar el dinero')
// } else if(opcion === '3'){
//      alert('aqui tengo que extraer el dinero')
// } else{
//      alert('Ingresaste una opción erronea')
// }

switch (opcion) {
  case "1":
    //aqui agrego todas las lineas necesarias si la opcion es '1'
    pantalla.innerHTML = `Tu saldo actual es $${saldo}`;
    break;
  case "2":
    const deposito = parseFloat(
      prompt("Agrega el dinero que quieres ingresar en tu cuenta"),
    );
    saldo += deposito; //saldo = saldo + deposito
    pantalla.innerHTML = `Ingresaste $${deposito}, Tu saldo actual es $${saldo}`;
    break;
  case "3":
    const montoExtraer = parseFloat(
      prompt("Ingresa el monto que quieres extraer"),
    );
    if (montoExtraer <= saldo) {
      saldo -= montoExtraer; //saldo = saldo - montoExtraer
      pantalla.innerHTML = `Retiraste $${montoExtraer}, Tu saldo actual es $${saldo}`;
    } else {
      alert("Fondos insuficientes");
    }
    break;
  default:
    //aqui agrego todas las lineas de codigo si la opcion ingresada no corresponde con ningun caso anterior
    alert("Ingresaste una opción erronea");
}
