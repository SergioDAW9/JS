"use strict"; // No deja añadir un valor sin declararlo antes, detecta potenciales errores 

const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
};

// Para evitar modificar campos, usamos
Object.freeze(producto);

// Comprobaciones por el congelado añadiendo, modificando o borrando una propiedad

producto.imagen="imagen.jpg";
delete producto.precio;
producto.precio=100;

console.log(Object.isFrozen(producto));


