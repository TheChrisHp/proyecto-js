

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
