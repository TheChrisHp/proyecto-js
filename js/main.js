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
//cap tasa  tiempo tiempotasa
function interesSimple(tasa, tTasa) {
  let tiempoTasaSimple = (tasa * 1) / tTasa;
  return tiempoTasaSimple; //resultado mensual para emparejar tiempo de tasa y tiempo en meses.
}

//Mensaje final
function mensajeF() {
  console.log(
    "🧑‍💻 Para futuros calculos no olvide que seguiremos actualizando nuestra web para que pueda efectuar sus cálculos."
  );
}

//Creo otras funciones para calcular el interés compuesto

function validarInteresCompuesto(capital, tasa, tiempoTasa, tiempo) {
  if (capital === 0 || tasa === 0 || tiempoTasa === 0 || tiempo === 0) {
    console.error("⛔ Error, no puede enviar datos vacíos.");
    return false;
  }
  if (
    Number(capital) < 0 ||
    Number(tasa) < 0 ||
    Number(tiempoTasa) < 0 ||
    Number(tiempo) < 0
  ) {
    console.error("⛔ Error, no puede enviar números negativos.");
    return false;
  }

  if (isNaN(capital) || isNaN(tasa) || isNaN(tiempoTasa) || isNaN(tiempo)) {
    //valido que sólo sean números y no de tipo string.
    console.error("⛔ Error, sólo se pueden ingresar números.");
    return false;
  }
  return true;
}

function interesCompuestoMensual(tasa, tiempoTasa) {
  //N = tiempo, tiempoTasa = denominador capitalizacion mensual (1) = numerador
  return Math.pow(1 + tasa, 1 / tiempoTasa) - 1; //primero calculo la tasa mensual
}

function interesCompuesto(capital, tasa, tiempoTasa, tiempo) {
  //llamo a la funcion del interes compuesto mensual
  let resTasa = interesCompuestoMensual(tasa, tiempoTasa);
  return capital * (Math.pow(1 + resTasa, tiempo) - 1); //math.pow segun investigue eleva a un numero en el segundo parametro ejemplo: Math.pow(5, 2) = 25
}

let intentos = true;

while (intentos) {
  let respuestaInteres = prompt(
    "Desea calcular ¿Interés Simple o Compuesto? Simple/Compuesto"
  );
  if (respuestaInteres.toLowerCase() === "simple") {
    let capital = Number(prompt("Ingrese el capital inicial"));
    let tasa = Number(
      prompt("Ingrese su Tasa de Interés (Ej: Si es 40% usar 0.4)")
    ); //suponemos que el usuario lo ingresa con 0,4 en caso de que sea 40%
    let tTasa = Number(
      prompt(
        "Tiempo de su Tasa (En Meses ej: Trismestral, Anual, Bimestral, etc)"
      )
    );
    let tiempo = Number(prompt("Ingrese el Tiempo (Ej: 12 para 1 año)")); //Tiempo pensado en meses (1 año = 12 meses, 2 años = 24 meses y así...)

    let valid = validar(capital, tasa, tiempo); //guardo la función en una variable "valid"
    // console.log(valid);

    if (valid === false) {
      break;
    }
    resTiempoTasa = interesSimple(tasa, tTasa);
    let inversion = capital * resTiempoTasa * tiempo;
    alert(`El Interés es de: $ ${inversion}`);
    console.log(`El Interés es de ➡️ $ ${inversion}`);

    //Crear el monto (FÓRMULA: [M = CAPITAL + INTERÉS])
    let respuesta = prompt("¿Desea calcular el monto? SI/NO");
    if (respuesta.toLowerCase() === "") {
      intentos = false;
      console.log("⛔ Error, no puede enviar texto vacio.");
      break;
    } else if (respuesta.toLowerCase() === "si") {
      let monto = capital + inversion;
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
    if (respuestafinal.toLowerCase != "si") {
      intentos = false;
      mensajeF();
      break;
    }
  } else if (respuestaInteres.toLowerCase() === "compuesto") {
    let capital = Number(prompt("Ingrese el capital inicial"));
    let tasa = Number(
      prompt("Ingrese su Tasa de Interés (Ej: Si es 40% usar 0.4)")
    );
    let tiempoTasa = Number(prompt("Tiempo de su tasa (En meses)"));
    let tiempo = Number(prompt("Ingrese el Tiempo (Ej: 12 para 1 año)"));

    let validCompuesto = validarInteresCompuesto(
      capital,
      tasa,
      tiempoTasa,
      tiempo
    );
    // console.log(IntCompuesto);

    if (validCompuesto === false) {
      break;
    }

    let iCompuesto = interesCompuesto(capital, tasa, tiempoTasa, tiempo); //guardo la función en una variable "iCompuesto"
    let monto = iCompuesto + capital;

    //llamo a la función de interés compuesto
    console.log(`El interés compuesto es de ➡️ $ ${iCompuesto}`);

    let preguntaMonto = prompt(
      "¿Desea calcular Monto del Interés Compuesto? Si/No"
    );
    if (preguntaMonto.toLowerCase() === "si") {
      console.log(`El monto es de ➡️ $ ${monto}`);
      console.log(
        "✅ Listo, su Interés Compuesto y Monto han sido calculados con éxito!"
      );
      intentos = false;
      mensajeF();
      break;
    } else if (preguntaMonto.toLowerCase() === "no") {
      intentos = false;
      mensajeF();
      break;
    }
  } else {
    //Si no es ni simple ni compuesto le manda un msg que no es correcto el dato enviado y finaliza el bucle
    console.error("⛔ Debe ingresar un dato válido.");
    intentos = false;
    mensajeF();
    break;
  }
}
