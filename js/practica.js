// let almacen = [
//   {
//     nombre: "Harina 0000",
//     precio: 40,
//     stock: 20,
//   },
//   {
//     nombre: "Pan Flauta",
//     precio: 60,
//     stock: 15,
//   },
//   {
//     nombre: "Pan lacteado rebanado",
//     precio: 75,
//     stock: 12,
//   },
//   {
//     nombre: "Manteca 200g",
//     precio: 75,
//     stock: 10,
//   },
// ];

// //reduce() recorre el array y suma los valores numericos del array
// const totalAcumulado = almacen.reduce((elemento, i) => elemento + i.precio, 0);
// console.log(totalAcumulado);

// //imprime un array mostrando el primer elemento que cumpla con la condicion
// let almEncontrado = almacen.find((elemento) => {
//   return elemento.precio < 75;
// });
// console.log(almEncontrado);

// //imprime un array filtrado con la condicion dada en el return
// let almFiltrado = almacen.filter((elemento) => {
//   return elemento.nombre.includes("Pan");
// });
// console.log(almFiltrado);

// //map() recorre el array y retorna un nuevo array con los elementos transformados
// let almMapeado = almacen.map((elemento) => {
//   return elemento.nombre;
// });
// console.log(almMapeado);

//PRUEBA ECOMMERCE
// let cafe = [
//   {
//     nombre: "Cafe Americano",
//     precio: 60,
//     stock: 20,
//     dispo: true,
//   },
//   {
//     nombre: "Cappuchino",
//     precio: 90,
//     stock: 15,
//     dispo: true,
//   },
//   {
//     nombre: "Cafe Negro",
//     precio: 50,
//     stock: 32,
//     dispo: true,
//   },
// ];

// class Cafes {
//   constructor(nombre, precio, stock, disponible) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//     this.disponible = disponible;
//   }

//   ingresosTotales() {
//     let valorTotal = this.precio * this.stock;
//     return valorTotal;
//   }

//   ventas(cantidad) {
//     if (cantidad > this.stock) {
//       console.log(`Se han vendido x ${this.stock}`);
//       this.stock = 0;
//       console.log(`El stock actual es de: ${this.stock}`);
//     } else {
//       console.log(`El stock de ${this.nombre} es de ${this.stock}`);
//       this.stock -= cantidad;
//       console.log(`Se han vendido: x${cantidad}`);
//       console.log(`Stock Disponible: ${this.stock} unidades`);
// this.ingresosTotales();
//       mostrarGanancias();
//     }

//     if (this.stock <= 0) {
//       this.disponible === false;
//       console.log("Lo sentimos, no tenemos stock disponible.");
//     }
//   }
// }

// creo una variable para pasar el array de objetos a poder utilizarlo en mi constructor
// let cafes = cafe.map(
//   (item) => new Cafes(item.nombre, item.precio, item.stock, item.dispo)
// );

// const mostrarGanancias = () => {
//   let ganancias = cafes.filter((elemento) => {
//     return elemento.ingresosTotales() > 500; //funcion que solo muestra ganancias mayores a 1000 pesos
//   });
//   ganancias.forEach((cafes) => {
//     console.log(
//       `${cafes.nombre} tiene ganancias de: ${cafes.ingresosTotales()} pesos`
//     );
//   });
//   return ganancias;
// };

// prueba de ventas
// cafes[1].ventas(2);

//REALIZADO -  Crea una aplicación para gestionar un inventario de productos. Cada producto debe tener un nombre, precio y cantidad. Puedes agregar productos, actualizar la cantidad de un producto existente y mostrar la lista de productos.

// let fruteria = [
//   {
//     nombre: "Manzana",
//     precio: 120,
//     stock: 45,
//   },
//   {
//     nombre: "Banana",
//     precio: 140,
//     stock: 32,
//   },
//   {
//     nombre: "Kiwi",
//     precio: 210,
//     stock: 17,
//   },
//   {
//     nombre: "Frutilla",
//     precio: 200,
//     stock: 98,
//   },
// ];

// const agregarProdcutos = (nombre, precio, stock) => {
//   fruteria.push({ nombre, precio, stock });
// };

// const actualizarProducto = (nombre, stock) => {
//   let actualiza = fruteria.find((fruteria) => fruteria.nombre === nombre);
//   if (actualiza) {
//     actualiza.stock += stock;
//   } else {
//     return "Ese producto no existe.";
//   }
//   return actualiza;
// };

// const mostrarProductos = () => {
//   fruteria.forEach((producto) => {
//     console.log(`Fruta: ${producto.nombre} `);
//     console.log(`Precio: ${producto.precio} `);
//     console.log(`Stock: ${producto.stock} `);
//   });
// };

// // agregarProdcutos("Anana", 140, 35);
// actualizarProducto("manzana", 20);
// mostrarProductos();

//NOTA - CREAR JUEGO PIEDRA PAPEL Y TIJERAS

// const juego = ["piedra", "papel", "tijeras"];

// const eleccionIa = () => {
//   let iaJuega = Math.floor(Math.random() * 3);
//   return juego[iaJuega];
// };

// const jugar = (eleccionUsuario) => {
//   let iaElige = eleccionIa();
//   console.log(`La IA elige ${iaElige}`);
//   if (eleccionUsuario === iaElige) {
//     console.log("Hubo un empate.");
//     let revancha = prompt("¿Aceptas revancha?");
//     if (revancha.toLowerCase() === "si") {
//       let eleccionRevancha = prompt("Elige Piedra, Papel o Tijeras");
//       jugar(eleccionRevancha);
//     } else {
//       console.log("El juego se ha terminado.");
//     }
//   } else if (
//     (eleccionUsuario === "piedra" && iaElige === "tijeras") ||
//     (eleccionUsuario === "papel" && iaElige === "piedra") ||
//     (eleccionUsuario === "tijeras" && iaElige === "papel")
//   ) {
//     console.log("¡Felicidades, has ganado!");
//   } else {
//     console.log("Has perdido");
//   }
// };

// let eleccionUsuario = prompt("Elige piedra papel o tijeras");
// jugar(eleccionUsuario);

// //REALIZADO --> 1- Crear un array de usuarios banco ITAU (simulacion)
// //REALIZADO --> 2- Encontrar a cada usuario por medio de su nro de cuenta
// //REALIZADO --> 3- Que cada usuario pueda depositar saldo
// //REALIZADO --> 4- Que cada usuario pueda retirar su saldo

// let arrayClientes = [
//   {
//     nombre: "Christian",
//     nroCuenta: 7583432,
//     saldoPesos: 3983724,
//   },
//   {
//     nombre: "Avril",
//     nroCuenta: 7649822,
//     saldoPesos: 100,
//   },
//   {
//     nombre: "Aurora",
//     nroCuenta: 8315424,
//     saldoPesos: 10000,
//   },
// ];

// const encontrarUsuario = (cuenta) => {
//   let encontrado = arrayClientes.find((cliente) => {
//     return cliente.nroCuenta === cuenta;
//   });
//   return encontrado;
// };

// const depositar = (cuenta, deposito) => {
//   let depositoCuenta = arrayClientes.find(
//     (cliente) => cliente.nroCuenta === cuenta
//   );
//   if (depositoCuenta) {
//     console.log(
//       `Cuenta ingresada como ${depositoCuenta.nombre} con NroCuenta ${depositoCuenta.nroCuenta}`
//     );
//     if (deposito < 100) {
//       console.log("Error, no puede ingresar depositos menores a $100 pesos");
//     } else {
//       depositoCuenta.saldoPesos += deposito;
//       console.log(
//         `Se ha depositado correctamente ${deposito} pesos en tu cuenta.`
//       );
//     }
//   } else {
//     return "Error, cuenta no existente.";
//   }
//   return depositoCuenta;
// };

// const retirar = (cuenta, retiro) => {
//   let retirarSaldo = arrayClientes.find(
//     (cliente) => cliente.nroCuenta === cuenta
//   );
//   if (retirarSaldo) {
//     if (retirarSaldo.saldoPesos >= retiro && retiro > 0) {
//       retirarSaldo.saldoPesos -= retiro;
//       console.log(`Se ha retirado exitosamente: $${retiro} pesos`);
//       console.log(`Su saldo actual es de: $${retirarSaldo.saldoPesos} pesos.`);
//     } else {
//       console.log(
//         `Error. No puede retirar ${retiro} ya que no tiene suficiente saldo.`
//       );
//     }
//   } else {
//     console.log("Error, esa cuenta no existe.");
//   }
//   return retirarSaldo;
// };

// let retiroAvi = retirar(7649822, 100);
// console.log(retiroAvi);

// let cuentaAvi = depositar(7649822, 350);
// console.log(cuentaAvi);

// let avi = encontrarUsuario(7649822);
// console.log(avi);

// let capital = document.getElementById("capital");
// let tiempoT = document.getElementById("tasaT");
// let resultado = document.getElementById("resultado");
// let btnCalc = document.getElementById("calc");

// if (btnCalc) {
//   btnCalc.addEventListener("click", () => {
//     let capitalValue = parseFloat(capital.value);
//     let tiempoTValue = parseFloat(tiempoT.value);
//     let calc = capitalValue + tiempoTValue;
//     resultado.value = `El resultado es: ${calc}`;
//   });
// }

// let input1 = document.getElementById("capital");
// let input2 = document.getElementById("tasaT");
// let btn = document.getElementById("calc");
// let resultado = document.getElementById("resultado");

// if (btn) {
//   btn.addEventListener("click", () => {
//     let inputvalue = Number(input1.value);
//     let input2value = Number(input2.value);
//     let result = inputvalue + input2value;
//     resultado.value = `El resultado es: ${result}`;
//   });
// }

// const productosTec = [
//   {
//     nombre: "Laptop Dell XPS 13",
//     precio: 1200,
//     stock: 15,
//     descripcion:
//       "Ultrabook de 13 pulgadas con procesador Intel i7 y 16GB de RAM",
//   },
//   {
//     nombre: "Smartphone Samsung Galaxy S21",
//     precio: 999,
//     stock: 25,
//     descripcion:
//       "Smartphone con pantalla AMOLED de 6.2 pulgadas y cámara de 64MP",
//   },
//   {
//     nombre: "Tablet Apple iPad Pro",
//     precio: 1100,
//     stock: 20,
//     descripcion:
//       "Tablet de 12.9 pulgadas con chip M1 y 256GB de almacenamiento",
//   },
//   {
//     nombre: "Smartwatch Apple Watch Series 7",
//     precio: 399,
//     stock: 30,
//     descripcion: "Smartwatch con pantalla Retina y sensores de salud avanzados",
//   },
//   {
//     nombre: "Auriculares Sony WH-1000XM4",
//     precio: 349,
//     stock: 40,
//     descripcion:
//       "Auriculares inalámbricos con cancelación de ruido líder en la industria",
//   },
//   {
//     nombre: "Consola PlayStation 5",
//     precio: 499,
//     stock: 10,
//     descripcion:
//       "Consola de videojuegos de próxima generación con gráficos 4K y SSD ultrarrápido",
//   },
//   {
//     nombre: "Monitor LG UltraWide 34''",
//     precio: 799,
//     stock: 12,
//     descripcion: "Monitor curvo ultra ancho de 34 pulgadas con resolución 5K",
//   },
//   {
//     nombre: "Cámara Canon EOS R5",
//     precio: 3899,
//     stock: 8,
//     descripcion:
//       "Cámara sin espejo con sensor de fotograma completo de 45MP y grabación de video 8K",
//   },
//   {
//     nombre: "Router TP-Link Archer AX6000",
//     precio: 300,
//     stock: 50,
//     descripcion:
//       "Router Wi-Fi 6 de alta velocidad con 8 puertos Ethernet y tecnología OFDMA",
//   },
//   {
//     nombre: "Disco Duro Externo Seagate 2TB",
//     precio: 89,
//     stock: 60,
//     descripcion:
//       "Disco duro externo portátil con conexión USB 3.0 y 2TB de almacenamiento",
//   },
// ];

// let div = document.createElement("div");
// div.className = "content-card";
// document.body.append(div);

// let allProducts = productosTec.forEach((producto) => {
//   let contenido = document.createElement("div");
//   contenido.innerHTML = `
//     <h1>${producto.nombre}</h1>
//     <h3>${producto.descripcion}</h3>
//     <h2>Precio: $${producto.precio}</h2>
//     `;
//   contenido.className = "card";
//   div.appendChild(contenido);
// });

// FETCH

// let peticion = fetch("https://jsonplaceholder.typicode.com/todos");

// let arrayTodos = []

// peticion.then((res) => res.json()).then((res) => arrayTodos.push(res));

// console.log(arrayTodos)
