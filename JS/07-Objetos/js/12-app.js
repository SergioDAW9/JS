const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4,
};

console.log(Object.keys(producto)); // Devolverá un array con las propiedades del objeto

claves=Object.keys(producto); // Asigna a una varaible las propiedades
console.log(claves);

console.log(Object.values(producto)); // Devuevlve un array unicamente con los valores 

console.log(Object.entries(producto)); // Devuelve todo