// let nombre = "Christian";
// let apellido = "Fortes";
// let edad = 21;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);

//CONDICIONALES

// let nom = prompt("Ingrese su nombre: ")
// let ap = prompt("Ingrese su apellido: ")
// let ed = Number(prompt("Ingrese su edad: "))

// if (nom == nombre && ap == apellido && edad == 21){
//     alert("Bienvenido " + nombre+ " " + apellido+ " " + " ✅")
// }else{
//     alert("Usuario no reconocido. ⛔")
// }

// let vari = false

// if(vari){
//     //true
//     console.log("Es verdadero")
// }else{
//     //false
//     console.log("Es falso")
// }

//SWITCH

// let dia = prompt("Ingrese el número del dia");

// switch (dia) {
//     case "1":
//         console.log("Lunes")
//         break
//     case "2":
//         console.log("Martes")
//         break
//     case "3":
//         console.log("Miércoles")
//         break
//     case "4":
//         console.log("Jueves")
//         break
//     case "5":
//         console.log("Viernes")
//         break
//     case "6":
//         console.log("Sábado")
//         break
//     case "7":
//         console.log("Domingo")
//         break
//     default:
//         console.log("Ingrese un número válido.")
// }

//TERNARIO

//condicion ? lo que quiero que sea true : lo que quiero que sea false

//EJEMPLO
// let edad = prompt("Ingrese su edad:")
// edad > 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad.")

//MINI EJERCICIO (SUBWAY)
// let sandwich = 100;
// let pan = prompt("Ingrese el pan que desea");
// let extra = prompt("Ingrese el extra que desee");

// if (pan === "comun" || pan === "orégano") {
//   pan === "comun" ? (sandwich += 2) : (sandwich += 5); //sandwich += 2 es lo mismo que sandwich = sandwich + 2
// } else {
//   alert("PAN INCORRECTO");
// }

// switch (extra) {
//   case "queso":
//   case "panceta":
//   case "carne":
//     sandwich += 10;
//     break;
//   case "pollo":
//     sandwich += 5;
//     break;
//   case "verdura":
//     sandwich += 2;
//     break;
//   default:
//     console.log("Extra no válido.");
// }

// console.log("El precio final es de: " + sandwich);

//CICLOS

//FOR

//Inicialización ; condición ; modificador (o incremento)
// for (let num = 0; num < 10; num++) {
//   console.log("hola");
// }

//EJERCICIO TABLA DE MULTIPLICACIÓN

// let numero = prompt("Ingrese su número");
// numero = Number(numero);

// for (let i = 1; i <= 10; i++) {
//   let texto = numero + "x" + i + "=" + numero * i;
//   console.log(texto);
// }

//TEMPLATE LITERALS
//"" -- '' -- `` ----> Crear textos STRING

//EJEMPLO

let nombre = "Christian"
let apellido = "Fortes"

//DOS FORMAS

//1
console.log("Hola " + nombre + " " + apellido +  " " +"cómo estas?")

//2 (mejor forma)
console.log(`Hola ${nombre} ${apellido} cómo estás?`)