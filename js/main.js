//Proyecto | Segunda Entrega

//Función para validar los números
function validar(capital, tasa, tiempoTasa, tiempo) {
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

//Mensaje final
function mensajeF() {
  console.log(
    "🧑‍💻 Para futuros calculos no olvide que seguiremos actualizando nuestra web para que pueda efectuar sus cálculos."
  );
}

//Creo constructor para almacenar las inversiones
class Inversion {
  constructor(capital, tiempoTasa, tiempo, tasa, tipo) {
    this.capital = capital;
    this.tiempoTasa = tiempoTasa;
    this.tiempo = tiempo;
    this.tasa = tasa;
    this.tipo = tipo;
    this.monto = 0;
    this.interes = 0;
  }

  pasarAMesInteresSimple() {
    return (this.tasa * 1) / this.tiempoTasa;
  }

  calcularInteresSimple() {
    let resultadoMesInteresSimple = this.pasarAMesInteresSimple();
    this.interes = this.capital * resultadoMesInteresSimple * this.tasa;
    this.monto = this.capital + this.interes;
  }

  calcularEquivalencia() {
    return Math.pow(1 + this.tasa, 1 / this.tiempoTasa) - 1;
  }

  calcularInteresCompuesto() {
    let equivalenciaTasa = this.calcularEquivalencia();
    this.interes =
      this.capital * (Math.pow(1 + equivalenciaTasa, this.tiempo) - 1);
    this.monto = this.capital + this.interes;
  }

  tipoInteres() {
    if (this.tipo === "simple") {
      this.calcularInteresSimple();
    } else if (this.tipo === "compuesto") {
      this.calcularInteresCompuesto();
    }
  }
}

//creo array vacio para almacernar datos de inversiones
let inversiones = [];

//creo funcion para agregar al array los datos ingresados del constructor por medio del prompt
const agregarInversionCompuestaArray = (
  capital,
  tiempoTasa,
  tiempo,
  tasa,
  tipo
) => {
  let inversion = new Inversion(capital, tiempoTasa, tiempo, tasa, tipo);
  inversion.tipoInteres();
  inversiones.push(inversion);
};

const agregarInversionSimpleArray = (
  capital,
  tiempoTasa,
  tiempo,
  tasa,
  tipo
) => {
  let inversion = new Inversion(capital, tiempoTasa, tiempo, tasa, tipo);
  inversion.tipoInteres();
  inversiones.push(inversion);
};

//creo una funcion para mostrar el array de inversiones luego de almacenados los datos
const mostrarInversiones = () => {
  inversiones.forEach((inversion, i) => {
    console.log(`Inversión ${i + 1}:`);
    console.log(`Tipo: ${inversion.tipo}`);
    console.log(`Capital: ${inversion.capital}`);
    console.log(`Tiempo: ${inversion.tiempo} meses`);
    console.log(`Tiempo Tasa: ${inversion.tiempoTasa} meses`);
    console.log(`Tasa: ${inversion.tasa}`);
    console.log(`Interés: ${inversion.interes}`);
    console.log(`Monto: ${inversion.monto}`);
    console.log("----------------------------------");
  });
};

let intentos = true;

while (intentos) {
  let tipo = prompt(
    "Ingrese que tipo de Interes desea calcular. (Simple/Compuesto)"
  );

  if (tipo.toLowerCase() === "compuesto") {
    let capital = Number(prompt("Ingrese el capital inicial"));
    let tasa = Number(
      prompt("Ingrese su Tasa de Interés (Ej: Si es 40% usar 0.4)")
    ); //suponemos que el usuario lo ingresa con 0,4 en caso de que sea 40%
    let tiempoTasa = Number(
      prompt(
        "Tiempo de su Tasa (En Meses ej: Trismestral, Anual, Bimestral, etc)"
      )
    );
    let tiempo = Number(prompt("Ingrese el Tiempo (Ej: 12 para 1 año)")); //Tiempo pensado en meses (1 año = 12 meses, 2 años = 24 meses y así...)

    if (validar(capital, tasa, tiempoTasa, tiempo)) {
      agregarInversionCompuestaArray(capital, tiempoTasa, tiempo, tasa, tipo);
      mostrarInversiones();

      //Agrego una consulta si el usuario quiere continuar con otro interés simple o terminar la ejecución.
      let respuestafinal = prompt("¿Desea calcular otro interés? SI/NO");
      if (respuestafinal.toLowerCase() != "si") {
        intentos = false;
        mensajeF();
      }
    }
  } else if (tipo.toLowerCase() === "simple") {
    let capital = Number(prompt("Ingrese el capital inicial"));
    let tasa = Number(
      prompt("Ingrese su Tasa de Interés (Ej: Si es 40% usar 0.4)")
    );
    let tiempoTasa = Number(
      prompt(
        "Tiempo de su Tasa (En Meses ej: Trismestral, Anual, Bimestral, etc)"
      )
    );
    let tiempo = Number(prompt("Ingrese el Tiempo (Ej: 12 para 1 año)")); //Tiempo pensado en meses (1 año = 12 meses, 2 años = 24 meses y así...)

    if (validar(capital, tasa, tiempoTasa, tiempo)) {
      agregarInversionSimpleArray(capital, tiempoTasa, tiempo, tasa, tipo);
      mostrarInversiones();

      let respuestafinal = prompt("¿Desea calcular otro interés? SI/NO");
      if (respuestafinal.toLowerCase() != "si") {
        intentos = false;
        mensajeF();
      }
    }
  } else {
    console.log("Error. Debe ingresar un dato válido.");
    mensajeF();
    intentos = false;
  }
}
