/*
CADENAS
*/

const producto="Monitor 20 pulgadas";

console.log(producto.length); //Longitud de la cadena

//Posicion de la cadena
console.log(producto.indexOf('Monitor')); //Devuelve 0;
console.log(producto.indexOf('pulgadas')); //Devuelve 11;
console.log(producto.indexOf('Tablet')); //Devuelve -1;

"Ballena Azul, Ballena Asesina".lastIndexOf('Ballena'); //Si son dos muestra la ultima posicion

console.log(producto.includes('Tablet')); //Devuelve true/false si existe en la cadena

const hello = "Hola Mundo¡";
const hellolenght=hello.length;
hello[0]="L";
hello[1]; //Devuelve la H 