/*
CONCATENAR
*/

const producto="Monitor de 20 pulgadas";
const precio=' 70 euros'

var mivar=producto.concat(precio);
console.log(mivar);
mivar=producto.concat('20% de decuento');
console.log(mivar);

//Version antigua de concatenar 
console.log(producto+" Con un precio de "+precio);
console.log(producto," Con un precio de ",precio);

//Version moderna de ecmacscript 6
console.log(`El producto ${producto} tiene un precio ${precio}`);