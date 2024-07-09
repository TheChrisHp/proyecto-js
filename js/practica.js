//PRUEBA ECOMMERCE
let cafe = [
  {
    nombre: "Cafe Americano",
    precio: 60,
    stock: 20,
    dispo: true,
  },
  {
    nombre: "Cappuchino",
    precio: 90,
    stock: 15,
    dispo: true,
  },
  {
    nombre: "Cafe Negro",
    precio: 50,
    stock: 32,
    dispo: true,
  },
];

class Cafes {
  constructor(nombre, precio, stock, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.disponible = disponible;
  }

  ingresosTotales() {
    let valorTotal = this.precio * this.stock;
    // console.log(`Las ganancias totales son de: ${valorTotal} pesos`);
    return valorTotal;
  }

  ventas(cantidad) {
    if (cantidad > this.stock) {
      console.log(`Se han vendido ${this.stock}`);
      this.stock = 0;
      console.log(`El stock actual es de: ${this.stock}`);
    } else {
      console.log(`El stock de ${this.nombre} es de ${this.stock}`);
      this.stock -= cantidad;
      console.log(`Se han vendido: ${this.stock}`);
      console.log(`Stock Disponible: ${cantidad} unidades`);
      // this.ingresosTotales();
      mostrarGanancias();
    }

    if (this.stock <= 0) {
      this.disponible === false;
      console.log("Lo sentimos, no tenemos stock disponible.");
    }
  }
}

// const cafesVendidos = () => {
//   let ventas = [];
//   for (let i = 0; i < cafes.length; i += 1) {
//     if (cafes[i]) {
//       cafes[i].ventas(2);
//       ventas.push(`Ventas realizadas para ${cafes[i].nombre}`);
//     }
//   }
//   return ventas;
// };

// creo una variable para pasar el array de objetos a poder utilizarlo en mi constructor
let cafes = cafe.map(
  (item) => new Cafes(item.nombre, item.precio, item.stock, item.dispo)
);

const mostrarGanancias = () => {
  let ganancias = cafes.filter((elemento) => {
    return elemento.ingresosTotales() > 1000; //funcion que solo muestra ganancias mayores a 1000 pesos
  });
  ganancias.forEach((cafes) => {
    console.log(
      `${cafes.nombre} tiene ganancias de: ${cafes.ingresosTotales()} pesos`
    );
  });
  return ganancias;
};

// prueba de ventas
cafes[1].ventas(7);
