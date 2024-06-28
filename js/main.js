//Proyecto | Primer Entrega

//Función para validar los números
// debugger;
function validar(num, num2, num3) {
  if (num === 0 || num2 === 0 || num3 === 0) {
    console.error("⛔ Error, no puede enviar datos vacíos.");
    return false;
  }
  if (Number(num) < 0 || Number(num2) < 0 || Number(num3) < 0) {
    console.error("⛔ Error, no puede enviar números negativos.");
    return false;
  }

  if (isNaN(num) || isNaN(num2) || isNaN(num3)) {
    //valido que sólo sean números y no de tipo string.
    console.error("⛔ Error, sólo se pueden ingresar números.");
    return false;
  }
  return true;
}

//Creo otra función para calcular el interés compuesto
function interesCompuesto(capital, tasa, tiempo) {
  let iCompuesto = capital * Math.pow(1 + tasa, tiempo) - 1; //math.pow segun investigue eleva a un numero en el segundo parametro ejemplo: Math.pow(5, 2) = 25
  if (capital === 0 || tasa === 0 || tiempo === 0) {
    console.error("⛔ Error, no puede enviar datos vacíos.");
    return false;
  }
  if (Number(capital) < 0 || Number(tasa) < 0 || Number(tiempo) < 0) {
    console.error("⛔ Error, no puede enviar números negativos.");
    return false;
  }

  if (isNaN(capital) || isNaN(tasa) || isNaN(tiempo)) {
    //valido que sólo sean números y no de tipo string.
    console.error("⛔ Error, sólo se pueden ingresar números.");
    return false;
  }
  return iCompuesto;
}

let intentos = true;

while (intentos) {
  let respuestaInteres = prompt(
    "Desea calcular ¿Interés Simple o Compuesto? Simple/Compuesto"
  );
  if (respuestaInteres.toLowerCase() === "simple") {
    let num = Number(prompt("Ingrese el capital inicial"));
    let num2 = Number(
      prompt("Ingrese su Tasa de Interés (Ej: Si es 40% usar 0.4)")
    ); //suponemos que el usuario lo ingresa con 0,4 en caso de que sea 40%
    let num3 = Number(prompt("Ingrese el Tiempo (Ej: 12 para 1 año)")); //Tiempo pensado en meses (1 año = 12 meses, 2 años = 24 meses y así...)

    let valid = validar(num, num2, num3); //guardo la función en una variable "valid"
    // console.log(valid);

    if (valid === false) {
      break;
    }
    let inversion = num * num2 * num3;
    alert(`El Interés es de: $ ${inversion}`);
    console.log(`El Interés es de ➡️ $ ${inversion}`);

    //Crear el monto (FÓRMULA: [M = CAPITAL + INTERÉS])
    let respuesta = prompt("¿Desea calcular el monto? SI/NO");
    if (respuesta.toLowerCase() === "") {
      intentos = false;
      console.log("⛔ Error, no puede enviar texto vacio.");
      break;
    } else if (respuesta.toLowerCase() === "si") {
      let monto = num + inversion;
      alert(`El monto es de: $ ${monto}`);
      console.log(`El monto es de ➡️ $ ${monto}`);
      console.log(
        "✅ Listo, su Interés Simple y Monto han sido calculados con éxito!"
      );
    } else {
      intentos = false;
      break;
    }
    //Agrego una consulta si el usuario quiere continuar con otro interés simple o terminar la ejecución.
    let respuestafinal = prompt("¿Desea calcular otro interés simple? SI/NO");
    if (respuestafinal.toLowerCase() != "si") {
      intentos = false;
      console.log(
        "🧑‍💻 Para futuros calculos no olvide que seguiremos actualizando nuestra web para que pueda efectuar sus cálculos."
      );
      break;
    }
  } else if (respuestaInteres.toLowerCase() === "compuesto") {
    let capital = Number(prompt("Ingrese el capital inicial"));
    let tasa = Number(
      prompt("Ingrese su Tasa de Interés (Ej: Si es 40% usar 0.4)")
    );
    let tiempo = Number(prompt("Ingrese el Tiempo (Ej: 12 para 1 año)"));

    let IntCompuesto = interesCompuesto(capital, tasa, tiempo); //guardo la función en una variable "valid"
    // console.log(IntCompuesto);

    if (IntCompuesto === false) {
      break;
    }

    //llamo a la función de interés compuesto
    console.log(`El interés compuesto es de ➡️ $ ${IntCompuesto}`);

    let preguntaMonto = prompt(
      "¿Desea calcular Monto del Interés Compuesto? Si/No"
    );
    if (preguntaMonto.toLowerCase() === "si") {
      let monto = capital * Math.pow(1 + tasa, tiempo);
      console.log(`El monto es de ➡️ $ ${monto}`);
      console.log(
        "✅ Listo, su Interés Compuesto y Monto han sido calculados con éxito!"
      );
      intentos = false;
      console.log(
        "🧑‍💻 Para futuros calculos no olvide que seguiremos actualizando nuestra web para que pueda efectuar sus cálculos."
      );
      break;
    } else if (preguntaMonto.toLowerCase() === "no") {
      intentos = false;
      console.log(
        "🧑‍💻 Para futuros calculos no olvide que seguiremos actualizando nuestra web para que pueda efectuar sus cálculos."
      );
      break;
    }
  } else {
    //Si no es ni simple ni compuesto le manda un msg que no es correcto el dato enviado y finaliza el bucle
    console.error("⛔ Debe ingresar un dato válido.");
    intentos = false;
    console.log(
      "🧑‍💻 Para futuros calculos no olvide que seguiremos actualizando nuestra web para que pueda efectuar sus cálculos."
    );
    break;
  }
}
