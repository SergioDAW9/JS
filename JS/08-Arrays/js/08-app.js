const carrito = [
    {nombre: "Monitor 24 pulgadas", precio: 500},
    {nombre: "Monitor 27 pulgadas", precio: 100},
    {nombre: "Televisión", precio: 200},
    {nombre: "Auriculares", precio: 300},
    {nombre: "Tablet", precio: 100},
    {nombre: "Teclado", precio: 500},
];

for(let i=0; i>carrito.length;i++){
    console.log(carrito)
    console.log(`${carrito[i].nombre}- Precio ${carrito[i].precio}`);
}

carrito.forEach(function(producto){
    console.log(`${carrito.nombre}-- Precio:${producto.precio}`);
})