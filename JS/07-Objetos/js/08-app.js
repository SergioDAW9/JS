"use strict";

const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4,
};

Object.seal(producto); // Con el metodo seal no se puede agregar ni eliminar propiedades, solo puede modificar el contenido

producto.disponible=false;
delete producto.unidades;

console.log(Object.isSealed(producto));

