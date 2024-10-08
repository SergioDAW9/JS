// const meses =['Enero, Febrero, Marzo, Abril, Mayo, Junio'];

// meses.push('Julio');
// console.table(meses);

// // Añade un nuevo elemento y lo añade al final

// const carrito=[];
// const producto={
//     nombre:"Tortilla de patata",
//     precio:2
// }

// // carrito.push(producto);
// // producto.nombre="Aceite 1L";
// // producto.precio=4;
// // carrito.push(producto);
// // console.table(carrito);

// const producto1={
//     nombre:"Aceite 1L",
//     precio:4
// }

// let producto2;

// carrito.push(producto1); //Encola el elemento
// carrito.push(producto1); //Encola el elemento
// carrito.unshift(producto2); // Apila el elemento

const carrito = [];

const producto1 = {
    nombre: "lentejas 300g",
    precio: 2
};

const producto2 = {
    nombre: "tomates 1Kg",
    precio: 3
};

const producto3 = {
    nombre: "atún",
    precio: 1
};

// TIPO COLA 

carrito.push(producto1); // Añadimos productos 
carrito.push(producto2);
console.table(carrito);
carrito.push(producto3)
console.table(carrito);
carrito.shift(); // Restando elementos 
console.table(carrito);
carrito.shift();
console.table(carrito);
carrito.shift();

// TIPO PILA

carrito.unshift(producto1);
console.log(carrito);
carrito.unshift(producto2);
carrito.unshift(producto3);
console.table(carrito);
carrito.pop(); // Resta la ultima posicion (1ª posicion)
console.table(carrito);
