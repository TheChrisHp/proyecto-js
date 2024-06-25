//Proyecto | Primer Entrega

let intentos = true;

while (intentos) {
  let num = Number(prompt("Ingrese el capital inicial"));
  let num2 = Number(prompt("Ingrese su Tasa de Interés")); //suponemos que el usuario lo ingresa con 0,4 en caso de que sea 40%
  let num3 = Number(prompt("Ingrese el Tiempo"));

  let res = num * num2 * num3;
  console.log(`Tu Tasa de Interés es de ${res}`);

  let respuesta = prompt("¿Desea calcular otro Interés Simple?");
  if (respuesta.toLowerCase() !== "si") {
    intentos = false;
  }
}

//Crear el monto (FÓRMULA: [M = CAPITAL + INTERÉS])









console.log(
  "Para futuros calculos no olvide que seguiremos actualizando nuestra web para que pueda efectuar sus cálculos."
);
