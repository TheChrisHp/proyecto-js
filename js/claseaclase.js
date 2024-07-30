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

//FUNCIONES

// function validacion() {
//   let nombre = prompt("nombre");
//   let apellido = prompt("apellido");

//   if (nombre === "" || apellido === "") {
//     console.log("NOOOO");
//     return false;
//   } else {
//     console.log("GOODDD");
//   }
// }

// validacion();

//Ejercicio de patentes

// let calcImpuesto = (marcaAuto) => {
//   let impuesto = 100;

//   switch (marcaAuto) {
//     case "volvo":
//       return (impuesto += 40);

//     case "byd":
//       return (impuesto += 25);

//     default:
//       return "Error, no existe esa marca.";
//   }
// };

// let total = calcImpuesto("caca");
// console.log(total);

//  CLASE DE OBJETOS

//  Undefined ----> No esta definido
//  Null -----> No tiene valor
//  NaN -----> Not a Number (No es un numero)

//  Todos estos son valores **FALSYS**

// OBJETOS EJEMPLO

// let telefono = {
//   nombre: "Samsung",
//   precio: 100,
//   descripcion: "Samsung a54",
//   aumentarPrecio: () => {
//     return "El precio aumentó";
//   },
// };

// Propiedades son como "variables" ligadas al objeto, en este ejemplo telefono es la variable objeto que tiene las propiedades "nombre, precio y descripcion"

// El Metodo siempre esta ligado al objeto

// console.log(telefono.nombre); // --> Al agregarle un "." al mostrar por consola podemos mostrar cualquier propiedad del objeto
// console.log(telefono.precio);

// let x = telefono.aumentarPrecio();
// console.log(x);

// Para MANIPULAR el OBJETO se puede utilizar variable.propiedad y asignarle el valor que quiera en caso de querer cambiar algun valor o actualizarlo. Ejemplo -> telefono.nombre = "motorola" y ahi estaría actualizando el valor de "Samsung" a "Motorola".

// En OBJETOS el "." despues de la variable objeto se llama dotenotation (o algo asi).

// PREGUNTA DE ENTREVISTA ¿Se puede reasignar un valor o crear uno en un objeto CONST? Ejemplo abajo

// const perro = {
//   nombre: "Ben",
//   edad: 4,
//   nombrePerro: function () {
//     return `Hola como estas? Mi nombre es: ${this.nombre}`;
//   },
// };

// perro.nombre = "SADASDA";
// let nombre = perro.nombrePerro();

// console.log(nombre);
// perro.color = "marron";

// perro.aumentarEdad = function () {
//   this.edad += 1;
// };

// perro.aumentarEdad();
// console.log(perro);

// THIS => Es para poder concatenar dentro del mismo OBJETO, es decir, en vez de utilizar en el return de "nombrePerro" ${perro.nombre} utilizamos {this.nombre} ya que hace referencia al objeto en el cual se está trabajando.

// CONSEJO, para que funcione el THIS en funciones fuera del objeto o dentro del objeto SIEMPRE utilizar FUNCTION y NO funciones flecha.

// La respuesta es SI, ya que CONST no se puede cambiar su valor a LA VARIABLE CONST, pero si a un OBJETO CONST.

// BRACKET NOTATION - Asi como existe el dot notation tambien existe el Bracket Notation que sirve de la siguiente forma: En vez de utilizar por ejemplo perro.edad se utiliza perro[edad] que es otra forma de representarlo.

// Cuando usamos parametros en una funcion es necesario cuando usamos a un objeto y pedimos una propiedad utilizar bracket notation. Ejemplo: function bracket = (parametro){ perro[parametro]}

// CONSTRUCTORES

// class Telefono {
//   constructor(nombre, precio, stock) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//   }
// }

// let telefono1 = new Telefono("HuaweiY62019", 90, 10);
// let telefono2 = new Telefono("Iphone 7", 120, 2);
// let telefono3 = new Telefono("Samsung Galaxy A54", 120, 1);

// console.log(telefono1, telefono2, telefono3);

// Los constructores en pocas palabras son una forma de simplificar en caso de que queramos tener varios productos y no tener que hacer demasiados objetos, ya que con los constructores es mucho mas practico crear varios como ejemplo tenemos lo de arriba.

// SIMULADOR DE E-COMMERCE

// class Producto {
//   constructor(nombre, precio, stock, estaDisponible) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//     this.disponible = estaDisponible;
//   }
//   //creo metodos
//   vender(cantidad) {
//     this.stock -= cantidad;
//     this.disponibilidad();
//     console.log(`Se han vendido ${cantidad}`);
//   }

//   disponibilidad() {
//     this.disponible = this.stock > 0 ? true : false;
//     console.log(`Su disponibilidad es ${this.disponible}`);
//   }
// }

// let caja = new Producto("Caja Pro", 100, 50, true);

// caja.vender(1);
// console.log(caja.stock);

// ARRAYS

// let numero = [2, 6, 9];

// console.log(numero[2]); //muestro la ultima posicion porque cada elemento inicia desde 0, entonces 2 tendria la posicion 0 y 9 la 2.

// console.log(numero.length); //muestro cuantos elementos hay en el array en este ejemplo: "3"

//length en caso de STRING suma caracteres, es decir cuenta todos los caracteres que tiene x palabra, y si se utiliza en array como en el caso de arriba te devuelve todos los elementos del array, es decir cuantos elementos hay en ese mismo array.

//NOTA: Generalmente se utiliza el CICLO FOR para recorrer arreglos y es lo mas probable que se utilice.

// let numeros = [3, 6, 9, 12, 15, 18];

//si quiero cambiar elementos del array desde fuera puedo hacerlo de la siguiente manera.

// numeros[1] = 24; //marco la posicion deseada que quiero cambiar y le asigno el valor que quiero.

// for (let i = 0; i < numeros.length; i += 1) {
//la variable i SIEMPRE se inicia desde 0 en caso de ARRAYS.
//   console.log(numeros[i]);
// }

// ARRAYS DE OBJETOS

// let productos = [
//   {
//     nombre: "Samsung",
//     precio: 14900,
//     stock: 17,
//   },
//   {
//     nombre: "Iphone",
//     precio: 16000,
//     stock: 5,
//   },
//   {
//     nombre: "Huawei",
//     precio: 7600,
//     stock: 32,
//   },
// ];

//creo una funcion para calcular las ganancias del stock con el precio para ver los resultados obtenidos de las ventas.

// let calcStock = () => {
//   let valorTotal = 0;

//   for (let i = 0; i < productos.length; i += 1) {
//     valorTotal += productos[i].precio * productos[i].stock; // sumo el resultado de la multiplicacion de precio con stock y lo guardo en la variable
//   }
//   return valorTotal;
// };

// let calcStockProductos = calcStock();

// for (let i = 0; i < productos.length; i += 1) {
//   console.log(productos[i]);
//   console.log(`El valor total obtenido es de ${calcStockProductos}`);
// }

// for (let i = 0; i < productos.length; i += 1) {
//   console.log(productos[i].nombre);
//   console.log("//////////////////");
//   console.log(productos[i]);
// }

//METODOS

// PUSH

// -> Push() es un metodo que hace que a un arreglo agregarle un dato o valor adicional en caso de no poder acceder al arreglo de forma manual, ejemplo: productos.push("hola")

// INCLUDES

// -> Includes() devuelve un valor true o false (booleano) y se utiliza para consultar si un dato existe en un arreglo. Ejemplo: productos.includes("motorola") me devuelve false, ya que motorola no se encuentra en mi arreglo.

// POP

// -> El Pop() corta el ultimo elemento del array.

//EJEMPLO SIMULADOR DE AGREGAR ITEMS A UN ARRAY

// let cel = [
//   {
//     nombre: "Samsung",
//     precio: 14999,
//     descripcion: "Samsung a54",
//     stock: 6,
//   },
//   {
//     nombre: "Iphone",
//     precio: 16500,
//     descripcion: "Iphone 7",
//     stock: 2,
//   },
// ];

// class Celulares {
//   constructor(nombre, precio, descripcion, stock) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.desc = descripcion;
//     this.stock = stock;
//   }
// }

// const agregarCelus = () => {
//   let nombre = prompt("Ingrese el nombre o marca");
//   let precio = Number(prompt("Ingrese el precio"));
//   let descripcion = prompt("Ingrese la descripcion del celular");
//   let stock = Number(prompt("Ingrese el Stock del celular"));

//   let telefono = new Celulares(nombre, precio, descripcion, stock);

//   cel.push(telefono); //agrego mas telefonos con los datos ingresados en el prompt
// };

// let iniciar = confirm("¿Desea agregar un telefono?");

// while (iniciar) {
//   agregarCelus();
//   iniciar = confirm("¿Desea agregar otro telefono?");
// }

// console.log(cel);

//FUNCIONES DE ORDEN SUPERIOR

//creo un array de objetos (frutas)
// const productos = [
//   { id: 1, nombre: "manzana", stock: 10 },
//   { id: 2, nombre: "pera", stock: 5 },
//   { id: 3, nombre: "banana", stock: 15 },
//   { id: 4, nombre: "uva", stock: 8 },
//   { id: 5, nombre: "naranja", stock: 2 },
//   { id: 6, nombre: "kiwi", stock: 4 },
//   { id: 7, nombre: "frutilla", stock: 7 },
// ];

// creo una funcion que encuentre objetos por id

// const encontrar = (identificador) => {
//   for (let i = 0; i < productos.length; i += 1) {
//     if (productos[i].id === identificador) {
//       return productos[i];
//     }
//   }

//   return false;
// };

// let encontrado = encontrar(6);
// console.log(encontrado);

// const encontrarYSumar = (iden) => {
//   let sum = encontrar(iden);
//   sum += 10;
// };

// encontrarYSumar(6);

// console.log(productos);

// Filtrar productos que tengan stock mayor que 5 y devolver
// un array con esos productos

// const filtroProductos = (array) => {
//   let nuevoarray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].stock > 5) {
//       nuevoarray.push(array[i]);
//     }
//   }
//   return nuevoarray;
// };

// console.log(filtroProductos(productos));

// Funciones que retornan una funcion => son las funciones de orden superior
// Funcion que reciba como argumento otra funcion

// const saludar = (nombre, otraFuncion) => {
//   console.log("hola " + nombre);
//   terminarSaludo(otraFuncion);
// };

// const terminarSaludo = () => {
//   console.log("Adios.");
// };

// saludar("Aurora", terminarSaludo);

// const items = [
//   { id: 1, nombre: "manzana", stock: 10 },
//   { id: 2, nombre: "pera", stock: 5 },
//   { id: 3, nombre: "banana", stock: 15 },
//   { id: 4, nombre: "uva", stock: 8 },
//   { id: 5, nombre: "naranja", stock: 2 },
//   { id: 6, nombre: "kiwi", stock: 4 },
//   { id: 7, nombre: "frutilla", stock: 7 },
// ];

// metodos arrays --> iteran el array
// find -> siempre devuelve el elemento o undefined (siempre el primer elemento)
// Retornar una condición
// en Find el primer parametro (x) es el elemento del array y el segundo parametro es la posición del elemento.

// let itemEncontrado = items.find((elemento, i) => {
//   console.log(`el elemento ${elemento.nombre} esta en la posición ${i}`);
// });

// metodo FILTER ---> siempre devuelve un NUEVO ARRAY
// SIEMPRE retornar un booleano

// let a = items.filter((elemento) => {
//     return elemento.stock > 5;
// });

// console.log(a);

// map ---> recorre un array y devuelve uno nuevo
// SIEMPRE va a ser de la misma logitud
// retornar en cada vuelta lo que quiero agregar

// let arrayMapeado = items.map((elemento)=>{
//     return {id: elemento.id, nombre: elemento.nombre, precio: 100}
// })

// console.log(arrayMapeado);

// FUNCIONES DE ORDEN SUPERIOR 2

// Metodo FOREACH
// no retorna nada

// let usuarios = [
//   {
//     nombre: "carlos",
//     telefono: "374612",
//   },
//   {
//     nombre: "juan",
//     telefono: "5746252",
//   },
//   {
//     nombre: "trevor",
//     telefono: "174612",
//   },
//   {
//     nombre: "arturo",
//     telefono: "765431",
//   },
// ];

//slice corta las letras de un string de izq a derecha
//chartAt() marca la letra que yo quiera de un string dentro del () del metodo
//toUpperCase() coloca todo el string a mayuscula

// let arrayForEach = usuarios.forEach((usuario, i) => {
//   usuario.id = i + 1;
//   usuario.nombre =
//     usuario.nombre.charAt(0).toUpperCase() + usuario.nombre.slice(1);
// });

// console.log(usuarios);

//some() devuelve un booleano, devuelve true si la condicion es verdadera

//every devuelve un booleano, devuelve true si TODOS cumplen la condicion.
// let telefonoUsuario = usuarios.every((usuario) =>
//   usuario.telefono.includes("7")
// );

// console.log(telefonoUsuario);

//OBJETO DATE

// let hoy = new Date()
// //obtengo el dia
// console.log(hoy.getDay());
// //obtengo el mes
// console.log(hoy.getMonth());
// //obtengo el año
// console.log(hoy.getFullYear());
//  //obtengo el dia del mes
// console.log(hoy.getDate());
// //obtengo los minutos
// console.log(hoy.getMinutes());
// //obtengo los minutos
// console.log(hoy.getSeconds());

//NOTA - DOM

//TRAER OBJETOS DEL DOM A JS

// ID
// let id = document.getElementById("form");
// console.log(id);

// CLASE
// let clase = document.getElementsByClassName(".cont-form");
// console.log(clase);

// QUERYSELECTOR -> trae cualquier elemento (clase, id, etc)
// let query = document.querySelector("#resultado");
// console.log(query);

//INNER TEXT --> Inyectas codigo HTML desde JS

// let variableCont = document.querySelector(".cont-form");
// variableCont.innerHTML = "<h1>AAAAAA</h1>";

// CREAR ELEMENTOS EN EL DOM
// let texto = document.createElement("div");
// texto.innerHTML = "Hola, lol";

// document.body.append(texto); // ---> Muestra e inyecta en el body el elemento creado (texto)

// PRUEBA PRACTICA APP

// const products = [

//   {
//     titulo: "PC",
//     descripcion: "pc gamer",
//     precio: 10500,
//   },
//   {
//     titulo: "Laptop",
//     descripcion: "Laptop gamer",
//     precio: 13500,
//   },
//   {
//     titulo: "Laptop HP",
//     descripcion: "Laptop Estudio",
//     precio: 9500,
//   },
//   {
//     titulo: "PC Escritorio",
//     descripcion: "PC Trabajo",
//     precio: 11200,
//   },
//   {
//     titulo: "Laptop MSI",
//     descripcion: "Laptop gamer MSI",
//     precio: 15800,
//   },
// ];

// let containerProduct = document.createElement("div");
// document.body.append(containerProduct);

// const productCard = document.createElement("div");
// productCard.innerHTML = `<h2>${products[0].titulo}</h2> <h3>${products[0].descripcion}</h3> <h4>${products[0].precio}</h4> <img src ="" alt = "">`;

// productCard.className = "card";

// containerProduct.appendChild(productCard);

//creo un FOR para recorrer todos los elementos del array products y mostrarlos todos.
// for (let i = 0; i < products.length; i++) {
//   const productCard = document.createElement("div");
//   productCard.innerHTML = `<h2>${products[i].titulo}</h2> <h3>${products[i].descripcion}</h3> <h4>${products[i].precio}</h4> <img src ="" alt = "">`;
//   productCard.className = "card";
//   containerProduct.appendChild(productCard);
// }

// O puedo crear un metodo FOREACH que seria mas sencillo:

// products.forEach((elemento) => {
//   const productCard = document.createElement("div");
//   productCard.innerHTML = `<h2>${elemento.titulo}</h2> <h3>${elemento.descripcion}</h3> <h4>${elemento.precio}</h4> <img src ="" alt = "">`;
//   productCard.className = "card";
//   containerProduct.appendChild(productCard);
// });

// NOTA --> Para que quede claro: innerText = Modifica el texto del id o clase seleccionada.
// innerHTML --> Nos ayuda a modificar DIVS, agregar otros divs o propiedades html a un contenedor, etc.

// let traigoTitulo = document.querySelector("#titulo");
// traigoTitulo.innerText = "HOLA";

// let contenido = document.createElement("section");
// document.body.append(contenido);

// let contenido2 = document.createElement("div");
// contenido.appendChild(contenido2);

// EVENTOS

let btnCalcular = document.getElementById("calc");
let contador = document.getElementById("contador");
// let num = 0;

//SUMA NUMEROS AL CLICKEAR
// btnCalcular.addEventListener("click", () => {
//   let pares = num * 2;
//   contador.innerText = pares;
// });

// AL PASAR EL MOUSE MUESTRA MENSAJE
// contador.addEventListener("mouseenter", () => {
//   console.log("aasdasdasd");
// });

// INPUTS
// let tiempo = document.getElementById("tiempo");
//MENSAJE AL UTILIZAR MAYUS
// tiempo.addEventListener("keyup", () => {
//   console.log("Uso mayus");
// });

//EVENTO QUE CAPTURA AL TECLEAR EN EL INPUT
// tiempo.addEventListener("keypress", (e) =>{
//     console.log("tecleando");
// } )

// let formulario = document.getElementById("form");

//EVENTO PARA EL BOTON SUBMIT DEL FORMULARIO
// EVENT.PREVENTDEFAULT() SE UTILIZA PARA EVITAR
// QUE AL CLICKEAR EL BOTON SE REFRESQUE LA PAG

// formulario.addEventListener("submit", (event) => {
//   event.preventDefault()
//   console.log("enviando form");
// });

//PRUEBA PRACTICA
// let nombre = document.getElementById("nombre");
// let descripcion = document.getElementById("descripcion");
// let precio = document.getElementById("precio");
// let form = document.getElementById("form");

// // VARIABLES PARA GUARDAR VALUES DE LOS INPUTS
// let guardoNombre = "";
// let guardoDesc = "";
// let guardoPrecio = "";

// //Guardo en un Array
// let variablesGuardadas = [];

// let contenedorProducto = document.getElementById("container-products");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let producto = {
//     nombre: guardoNombre,
//     descripcion: guardoDesc,
//     precio: Number(guardoPrecio),
//   };
//   variablesGuardadas.push(producto);
//   let tarjetas = document.createElement("div");
//   tarjetas.innerHTML = `<div class="tarjetas"><h1>Nombre: ${guardoNombre}</h1><h2>Descripcion: ${guardoDesc}</h2><h3>Precio: $${guardoPrecio}</h3></div>`;
//   contenedorProducto.appendChild(tarjetas);
// });

// // INPUTS GUARDAR INFO EN VARIABLE
// nombre.addEventListener("input", () => {
//   guardoNombre = nombre.value;
// });

// descripcion.addEventListener("input", () => {
//   guardoDesc = descripcion.value;
// });

// precio.addEventListener("input", () => {
//   guardoPrecio = precio.value;
// });

// REPASO PRUEBA PRACTICA

// let nombre = document.getElementById("nombre");
// let descripcion = document.getElementById("descripcion");
// let precio = document.getElementById("precio");
// //FORM
// let form = document.getElementById("form");
// //BTN REMOVER DATOS
// let btn = document.getElementById("btnRemover");

// // GUARDO EN VARIABLES LOS DATOS INGRESADOS EN EL INPUT
// let gNombre = "";
// let gDescripcion = "";
// let gPrecio = 0;

// // EVENTOS A LOS INPUTS
// nombre.addEventListener("input", () => {
//   gNombre = nombre.value;
// });
// descripcion.addEventListener("input", () => {
//   gDescripcion = descripcion.value;
// });
// precio.addEventListener("input", () => {
//   gPrecio = precio.value;
// });

// // CREO ARRAY PARA GUARDAR DATOS DE LOS INPUTS
// let array = [];

// // TRAIGO CONTAINER PRODUCTS PARA USAR DE PADRE DE LAS TARJETAS
// let containerTarjetas = document.getElementById("container-products");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let objetos = {
//     nombre: gNombre,
//     descripcion: gDescripcion,
//     precio: Number(gPrecio),
//   };
//   array.push(objetos);
//   let tarjetas = document.createElement("div");
//   tarjetas.innerHTML = `<div class="tarjetas"><h1>Nombre:${gNombre}</h1><h2>Desc:${gDescripcion}</h2><h2>Precio:$${gPrecio}</h2></div>`;
//   containerTarjetas.appendChild(tarjetas);
// });

// btn.addEventListener("click", () => {
//   if (array.length > 0) {
//     let remover = array.pop();
//     containerTarjetas.removeChild(remover.elemento);
//   }
// });
