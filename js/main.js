//Contenedor Weather APP
const container = document.querySelector(".cont-weather");
//traigo titulo para limpiarlo despues de buscar un clima
const titulo = document.getElementById("titulo");
//Contenedor STATS
const contStats = document.querySelector(".cont-stats");
const Stats = document.querySelector(".stats");
//Form e Inputs
const form = document.getElementById("form");
const ciudad = document.getElementById("ciudad");
const pais = document.getElementById("pais");

// Creo un array vacío para posteriormente
// almacenar la ciudad y pais que el usuario consulte, para
// su proxima vez al entrar ya tenga cargados los datos por LS.
let climas = JSON.parse(localStorage.getItem("clima")) || [];

//Creo funcion para cargar datos del LS en el DOM
const cargarDomLs = () => {
  if (climas.length > 0) {
    //metodo para recorrer el Array e imprimir los datos en el DOM
    climas.forEach((clima) => {
      //verifico que ciudad y pais no sean undefined
      if (clima.ciudad !== undefined && clima.pais !== undefined) {
        api(clima.ciudad, clima.pais);
      }
    });
  }
};

//evento que al cargar (o F5) la página ejecuta la funcion cargarDomLs
window.addEventListener("DOMContentLoaded", cargarDomLs);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //hago validación, en caso que me de vacío corte la ejecución en el
  //return e imprima error en el DOM
  if (ciudad.value === "" && pais.value === "") {
    msgError("Error. No pueden haber campos vacíos.");
    return;
  }

  //creo objeto para almacenar datos del clima y pushearlos al array
  let climaObjetos = {
    ciudad: ciudad.value,
    pais: pais.value,
  };
  climas.push(climaObjetos); //pusheo los datos al array vacío

  api(ciudad.value, pais.value);
  localStorage.setItem("clima", JSON.stringify(climas));
});
const api = (ciudad, pais) => {
  let keyApi = "c1fa157a6e248580ac0462516edb891e";
  let callApi = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${keyApi}`;

  //PRUEBA PARA CORROBORAR QUE EL LINK FUNCIONA: https://api.openweathermap.org/data/2.5/weather?q=montevideo,uy&appid=c1fa157a6e248580ac0462516edb891e

  //Utilizo FETCH para traer la API de openweathermap(aprendido fuera del curso)
  fetch(callApi)
    .then((data) => {
      return data.json();
    })
    .then((dataJSON) => {
      //si el codigo de error es 404 pinta msg de error.
      if (dataJSON.cod === "404") {
        let err404 = document.createElement("div");
        err404.innerHTML = `<p style="color:red; text-align:center; font-weigth: 600;">Ciudad o País Incorrecto.</p>`;
        container.appendChild(err404);
        setTimeout(() => {
          container.removeChild(err404);
        }, 2000);
      } else {
        console.log(dataJSON);
      }
      titulo.innerHTML = "";
      mostrarClima(dataJSON);
    })
    .catch((error) => {
      console.error("Error =>", error);
    });
};

const mostrarClima = (data) => {
  //desestructuro los objetos del ARRAY del CLIMA traido de la API
  let {
    name,
    main: { temp, temp_min, temp_max, humidity, pressure },
  } = data;

  //traigo la funcion que parsea de Farenhit a grados centigrados y se las asigno a los objetos del ARRAY CLIMA
  let tempMin = parseACentigrados(temp_min);
  let tempMax = parseACentigrados(temp_max);
  let tempActual = parseACentigrados(temp);

  //pusheo temperaturas y estadisticas al Array
  let estadisticas = {
    temperatura: tempActual,
    temperaturaMax: tempMax,
    temperaturaMin: tempMin,
    humedad: humidity,
    presionAtmosferica: pressure,
  };
  climas.push(estadisticas);
  localStorage.setItem("clima", JSON.stringify(climas)); //guardo estadisitcas en el LS.
  console.log(climas);

  //traigo un DIV vacío para agregar las IMAGENES del clima y pintarlas en el DOM
  let contIMG = document.querySelector(".cont-img");
  contIMG.innerHTML = `<img style="width:220px;" id="img-Weather" src="" alt="img">`;
  let imgWeather = document.getElementById("img-Weather"); //traigo el ID del img creado

  //Creo condicional (SWITCH) para agregar IMAGENES del Clima traidos de la API y mostrarlos en el DOM
  switch (data.weather[0].main) {
    case "Clouds":
      imgWeather.src = "../resources/nubes.svg";
      break;
    case "Rain":
      imgWeather.src = "../resources/lluvia.svg";
      break;
    case "Mist":
      imgWeather.src = "../resources/neblina.png";
      break;
    case "Snow":
      imgWeather.src = "../resources/nieve.png";
      break;
    case "Clear":
      imgWeather.src = "../resources/soleado.png";
      break;
    case "Wind":
      imgWeather.src = "../resources/viento.svg";
      break;
    default:
      imgWeather.src = "../resources/llovizna.png";
  }

  //prueba de colocar horario
  const horario = new Date();
  const horas = horario.getHours();
  const minutos = horario.getMinutes();

  const texto = `${horas}:${minutos}`;

  //traigo nombre de ubicacion para mostrarlo en el DOM
  let ubicacion = document.getElementById("ubicacion-nombre");
  ubicacion.innerHTML = `${name} <h4 style="font-size: 2rem;">${texto}</h4>`;

  //creo elementos para pintar las STATS de la APP CLIMA en el DOM
  let statsWeather = document.createElement("div");
  statsWeather.innerHTML = `
  <div style="border: solid 2px; border-radius: 6px; padding: 0.8rem; width: 250px">
  <h1 style="font-weight: 500;">Temp ${tempActual}°C</h1>
  <h4 style="font-weight: 400;">T.Max ${tempMax}°C</h4>
  <h4 style="font-weight: 400;">T.Min ${tempMin}°C</h4>

  <div style="margin-top: 10px; display: flex; justify-content: start; align-items: center; gap: 4px;">
  <p>${humidity}</p>
  <img style="width: 20px; height: 20px;" src="../resources/humedad.webp" alt="icon-humedad">
  <br>
  <p>${pressure}</p>
  <img style="width: 20px; height: 20px;" src="../resources/presion-atmosferica.webp" alt="icon-presion-atmosférica">
  </div>
  </div>`;
  Stats.innerHTML = ``; //borra la anterior impresión al DOM para que no se duplique.
  Stats.appendChild(statsWeather);
};

//Creo una funcion para pasar de Grados Farenhit a Grados Centigrados.
const parseACentigrados = (temperatura) => {
  let tempCen = temperatura - 273.15;

  return Math.round(tempCen); //redondeo temperatura al valor mas cercano
};

const msgError = (mensaje) => {
  let msg = document.createElement("div");
  msg.innerHTML = `<p style="font-size: 1.2rem; text-shadow: 0px 1px 1px #000; color:red; text-align:center; font-weight: 500;">${mensaje}</p>`;
  container.appendChild(msg);
  setTimeout(() => {
    container.removeChild(msg);
  }, 2000);
};
