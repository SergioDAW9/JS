const producto="     Monitor 20 pulgadas     ";
console.log(producto.length);

//Elimina los espacios en blanco
console.log(producto.trimStart());
console.log(producto.trimEnd()); 

console.log(producto.trimStart().trimEnd());

console.log(producto.trim());
console.log(producto.trim().length);