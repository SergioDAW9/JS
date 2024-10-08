/**
 * METODOS DE RECONVERSION
 */

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;

console.log(typeof numero3);

console.log(Number.parseInt(numero1));
var mivar=Number.parseInt(numero1);

console.log(Number.parseInt(numero2));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3)); //Devuelve NaN

console.log(Number.isInteger(numero4)); //Devuelve true
console.log(Number.isInteger(numero3)); //Devuelve false

console.log(Number.parseFloat(numero2).toFixed(2)); //Corta de dos decimales