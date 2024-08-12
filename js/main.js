//Contenedor Weather APP
const container = document.querySelector(".cont-weather");
//traigo titulo para limpiarlo despues de buscar un clima
const titulo = document.getElementById("titulo");
const contTitulo = document.querySelector(".cont-titulo");
//Contenedor STATS
const contStats = document.querySelector(".cont-stats");
const Stats = document.querySelector(".stats");
//Form e Inputs
const form = document.getElementById("form");
const ciudad = document.getElementById("ciudad");
const pais = document.getElementById("pais");
let bgApp = document.querySelector(".bg-body");
//Alertas
const fondoApp = document.querySelector(".alertas");
const containerH = document.querySelector(".cont-historial");

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

  api(ciudad.value, pais.value);
  localStorage.setItem("clima", JSON.stringify(climas));

  //alerta + condicion para que no se duplique la alerta
  const alertaSinDuplicado = climas.some(
    (clima) => clima.ciudad === ciudad.value //devuelve TRUE
  );
  //si es true el ! lo invierte a FALSE entonces cuando
  //la condicion de SOME se ejecute será cuando una u otra ciudad no esté en el array
  if (!alertaSinDuplicado) {
    Toastify({
      text: `Estás viendo como está ${ciudad.value}`,
      duration: 5000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  }
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
      contTitulo.innerHTML = "";
      mostrarClima(dataJSON);
    })
    .catch((error) => {
      console.error("Error =>", error);
    });
};

//Creo una funcion para pasar de Grados Farenhit a Grados Centigrados.
const parseACentigrados = (temperatura) => {
  let tempCen = temperatura - 273.15;

  return Math.round(tempCen); //redondeo temperatura al valor mas cercano
};
//creo variable para limpiar el horario en tiempo real
let intervalo;
//creo funcion tiempo en tiempo real según libreria Luxon
const tiempoCiudad = (tiempo) => {
  if (intervalo) {
    clearInterval(intervalo);
  }
  const tiempoEnHoras = tiempo / 3600;
  const actualizarTiempo = () => {
    const now = luxon.DateTime.now().setZone(
      `UTC${tiempoEnHoras >= 0 ? "+" : ""}${tiempoEnHoras}`
    );
    const horaElement = document.getElementById("txt-Hora");

    horaElement.textContent = now.toFormat("hh:mm a");
  };

  actualizarTiempo();
  intervalo = setInterval(actualizarTiempo, 1000); //actualizo tiempo cada 1 segundo
};

const mostrarClima = (data) => {
  //desestructuro los objetos del ARRAY del CLIMA traido de la API
  let {
    name,
    timezone,
    main: { temp, temp_min, temp_max, humidity, pressure },
  } = data;

  //traigo la funcion que parsea de Farenhit a grados centigrados y se las asigno a los objetos del ARRAY CLIMA
  let tempMin = parseACentigrados(temp_min);
  let tempMax = parseACentigrados(temp_max);
  let tempActual = parseACentigrados(temp);

  //traigo un DIV vacío para agregar las IMAGENES del clima y pintarlas en el DOM
  let contIMG = document.querySelector(".cont-img");
  contIMG.innerHTML = `<img style="width:220px;" id="img-Weather" src="" alt="img" data-tilt>`;
  let imgWeather = document.getElementById("img-Weather"); //traigo el ID del img creado

  //evaluo el tiempo en milisegundos
  const salidaSol = data.sys.sunrise * 1000;
  const puestaSol = data.sys.sunset * 1000;
  const horaActual = Date.now(); //hora actual

  //evaluo si es de dia o de noche para cambiar las img
  const tiempoDia = horaActual >= salidaSol && horaActual < puestaSol;

  // si es de dia coloca el background dia y si es de noche lo contrario.
  if (tiempoDia) {
    bgApp.className = "bg-body";
  } else {
    bgApp.className = "bg-noche";
  }

  if (tiempoDia) {
    //Creo condicional (SWITCH) para agregar IMAGENES del Clima traidos de la API y mostrarlos en el DOM
    switch (data.weather[0].description) {
      //lluvia
      case "rain":
        imgWeather.src = "../resources/lluvia.svg";
        break;
      case "shower rain":
        imgWeather.src = "../resources/llovizna.png";
        break;
      case "thunderstorm":
        imgWeather.src = "../resources/truenos.webp";
        break;
      //nubes
      case "broken clouds":
        imgWeather.src = "../resources/nubes.svg";
        break;
      case "few clouds":
        imgWeather.src = "../resources/few-clouds.png";
        break;
      case "scattered clouds":
        imgWeather.src = "../resources/nubes.svg";
        break;
      case "snow":
        imgWeather.src = "../resources/nieve.png";
        break;
      case "clear sky":
        imgWeather.src = "../resources/soleado.png";
        break;
      case "mist":
        imgWeather.src = "../resources/mist.webp";
        break;
      default:
        imgWeather.src = "../resources/llovizna.png";
    }
  } else {
    switch (data.weather[0].description) {
      case "clear sky":
        imgWeather.src = "../resources/luna.webp";
        break;
      case "few clouds":
        imgWeather.src = "../resources/few-clouds-night.webp";
        break;
      default:
        imgWeather.src = "../resources/llovizna.png";
    }
  }

  //pusheo temperaturas y estadisticas al Array
  let estadisticas = {
    ciudad: ciudad.value,
    pais: pais.value,
    clima: data.weather[0].description,
    amanecer: data.sys.sunrise,
    atardecer: data.sys.sunset,
    estadisticas: {
      temperatura: tempActual,
      temperaturaMax: tempMax,
      temperaturaMin: tempMin,
      humedad: humidity,
      presionAtmosferica: pressure,
    },
  };

  //evitar duplicación
  const existeClima = climas.some(
    (clima) => clima.ciudad === estadisticas.ciudad
  );

  if (!existeClima && estadisticas.ciudad !== "") {
    climas.push(estadisticas);
    localStorage.setItem("clima", JSON.stringify(climas)); //guardo estadisitcas en el LS.
  }

  //traigo nombre de ubicacion para mostrarlo en el DOM
  let ubicacion = document.getElementById("ubicacion-nombre");
  ubicacion.innerHTML = `${name} <p id="txt-Hora"></p>`; // Añadido al DOM aquí
  tiempoCiudad(timezone); // Llamada a tiempoCiudad después de añadir #txt-Hora al DOM

  //creo elementos para pintar las STATS de la APP CLIMA en el DOM
  let statsWeather = document.createElement("div");
  statsWeather.innerHTML = `
  <div style="border: solid 2px; border-radius: 6px; padding: 0.8rem; width: 250px">
  <h1 style="font-weight: 500;">Temp ${tempActual}°C</h1>
  <h4 style="font-weight: 400;">T.Max ${tempMax}°C</h4>
  <h4 style="font-weight: 400;">T.Min ${tempMin}°C</h4>

  <div style="margin-top: 10px; display: flex; justify-content: start; align-items: center; gap: 4px;">
  <p>${humidity}%</p>
  <img style="width: 20px; height: 20px;" title="humedad" src="../resources/humedad.webp" alt="icon-humedad">
  
  <br>
  <p>${pressure}</p>
  <img style="width: 20px; height: 20px;" title="presión atmosférica" src="../resources/presion-atmosferica.webp" alt="icon-presion-atmosférica">
  </div>
  </div>`;
  Stats.innerHTML = ``; //borra la anterior impresión al DOM para que no se duplique.
  Stats.appendChild(statsWeather);
  historialClimas(climas);
};

// Historial de Climas
const historialClimas = (array) => {
  containerH.innerHTML = "";
  let historialClima = array.slice(0, 7);
  historialClima.forEach((elemento) => {
    if (elemento.estadisticas && elemento.estadisticas.temperatura !== null) {
      let contHistorial = document.createElement("div");
      let imgHistorial = document.createElement("img");
      const salidaSol = elemento.amanecer * 1000;
      const puestaSol = elemento.atardecer * 1000;
      const horaActual = Date.now(); //hora actual
      const tiempoDia = horaActual >= salidaSol && horaActual < puestaSol;

      if (tiempoDia) {
        switch (elemento.clima) {
          case "broken clouds":
            imgHistorial.src = "../resources/nubes.svg";
            break;
          case "few clouds":
            imgHistorial.src = "../resources/few-clouds.png";
            break;
          case "scattered clouds":
            imgHistorial.src = "../resources/nubes.svg";
            break;
          case "rain":
            imgHistorial.src = "../resources/lluvia.svg";
            break;
          case "mist":
            imgHistorial.src = "../resources/mist.webp";
            break;
          case "snow":
            imgHistorial.src = "../resources/nieve.png";
            break;
          case "clear sky":
            imgHistorial.src = "../resources/soleado.png";
            break;
          case "wind":
            imgHistorial.src = "../resources/viento.svg";
            break;
          case "thunderstorm":
            imgHistorial.src = "../resources/truenos.webp";
            break;
          case "shower rain":
            imgHistorial.src = "../resources/llovizna.png";
            break;
          default:
            imgHistorial.src = "../resources/llovizna.png";
        }
      } else {
        switch (elemento.clima) {
          case "clear sky":
            imgHistorial.src = "../resources/luna.webp";
            break;
          case "few clouds":
            imgHistorial.src = "../resources/few-clouds-night.webp";
            break;
          default:
            imgHistorial.src = "../resources/llovizna.png";
        }
      }
      contHistorial.innerHTML = `
      <section class="cont-historial-deco">
      <div class="content-h-climas" style="border: solid 1px #000; border-radius: 6px; display: flex; align-items: center; padding: 9px; gap: 10px; justify-content: 
      space-between; vertical-align:middle;">
          <img style="width: 50px;" src="${imgHistorial.src}">
          <h3 style="color: #dbdbdbdb;font-weight:500;">${elemento.ciudad}</h3>
          <div style="display: flex; flex-direction:column; align-items:center;">
          <p style="">${elemento.estadisticas.temperatura}°C</p>
          </div>
        </div>
      </section>`;
      contHistorial.style.opacity = 0;
      containerH.appendChild(contHistorial);

      //animacion con libreria GSAP
      gsap.to(contHistorial, {
        duration: 1,
        opacity: 1,
        y: -2,
        ease: "power2.out",
        delay: 0.2,
      });
    }
  });
};

const msgError = (mensaje) => {
  let msg = document.createElement("div");
  msg.innerHTML = `<p style="font-size: 1.2rem; text-shadow: 0px 1px 1px #000; color:red; text-align:center; font-weight: 500;">${mensaje}</p>`;
  container.appendChild(msg);
  setTimeout(() => {
    container.removeChild(msg);
  }, 2000);
};
