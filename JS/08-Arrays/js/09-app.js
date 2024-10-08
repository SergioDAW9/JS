const carrito = [
    {nombre: "Monitor 24 pulgadas", precio: 500},
    {nombre: "Monitor 27 pulgadas", precio: 100},
    {nombre: "Televisión", precio: 200},
    {nombre: "Auriculares", precio: 300},
    {nombre: "Tablet", precio: 100},
    {nombre: "Teclado", precio: 500},
];

const carrito1=carrito.forEach(function(producto){
    return `${carrito.nombre}-- Precio:${producto.precio}`;
});

console.log(carrito1);

const carrito2=carrito.map=(function(producto){
    return `${carrito.nombre}-- Precio:${producto.precio}`;
});

console.log(carrito2);