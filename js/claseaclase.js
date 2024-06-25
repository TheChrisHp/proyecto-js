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

// let nombre = "Christian"
// let apellido = "Fortes"

//DOS FORMAS

//1
// console.log("Hola " + nombre + " " + apellido +  " " +"cómo estas?")

//2 (mejor forma)
// console.log(`Hola ${nombre} ${apellido} cómo estás?`)

//Ejercicio random LOGIN

// let user = prompt("Bienvenido, ingrese su usuario.");
// let pass = prompt("Ingrese su contraseña");

// if (user === "Christian" && pass === "Fortes") {
//   console.log(`Bienvenido, hace mucho tiempo no te vemos! ${user}, recuerda que si quieres cambiar tu contraseña
//         solicitalo a algún admin.`);
// } else if (user === "Avril" && pass === "Rodriguez") {
//   console.log(`Bienvenida, hace tiempo no te veia ${user}, recuerda que si quieres cambiar tu contraseña
//         solicitalo a algún admin.`);
// } else {
//   console.log(
//     `El usuario ${user} y la contraseña ${pass} no son reconocidas por el sistema.`
//   );
// }

// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");

// console.log(`Su nombre es ${nombre} y su apellido es ${apellido}.`);

//Ejercicio par e impar ingresado por teclado.

// let inicio = Number(prompt("Ingrese un número inicial"))
// let fin = Number(prompt("Ingrese un número final"))

// for(let i = inicio; i<=fin; i++){
//   let res = i % 2 === 0 ? `El número ${i} es par.` : `El número ${i} es impar.`
//   console.log(res)
// }

//WHILE

//mostrar por consola numeros del 1 al 10

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let palabra = "";

// while (palabra !== "pepe") {
//   console.log("nombre incorrecto");
//   palabra = prompt("Ingrese nombre");

//   if (palabra === "pepe") {
//     console.log("Palabra correcta para la finalización del código.");
//   }
// }

//DO WHILE

//Prueba DOM (sin saber nada)

// function sumar() {
//   const numero1 = document.getElementById("num1").value;
//   const numero2 = document.getElementById("num2").value;

//   if (numero1 === "") {
//     numero1 = 0;
//   } else if (numero2 === 0) {
//     numero2 = 0;
//   }

//   const resultado = Number(numero1) + Number(numero2);

//   document.getElementById("resultado").value = resultado;
// }

// function multiplicar() {
//   let numero1 = document.getElementById("num1").value;
//   let numero2 = document.getElementById("num2").value;

//   let num1 = Number(numero1) || 0;
//   let num2 = Number(numero2) || 0;

//   const multiplicacion = num1 * num2;

//   document.getElementById("resultado").value = multiplicacion;
// }

// function dividir(){
//     const numero1 = document.getElementById("num1").value
//     const numero2 = document.getElementById("num2").value

//     let num1 = Number(numero1) || 0
//     let num2 = Number(numero2) || 0

//     let resultado = num1 / num2

//     document.getElementById("resultado").value = resultado
// }
