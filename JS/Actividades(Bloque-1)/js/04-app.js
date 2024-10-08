//Dada la cadena "En un lugar de la mancha", almacena cada palabra en una variable y visualizarla en orden contrario.

const cadena2='En un lugar de la mancha';
const cadenaSplit=cadena2.split(" ").reverse();
console.log(cadenaSplit);

//Dada la cadena "En un lugar de la mancha", visualizar el numero de espacio en blanco que tiene.

const cadena3 = ('En un lugar de la mancha');
const espacio = cadena3.match(/ /g).length;
console.log(espacio)

//Dadas las cadenas "053771456F" "Ramon Albacete tiene Dni", forma una unica cadena.

var cadenaNum = ' 053771456F';
var cadenaNom = 'Ramon Albacete tiene Dni';
const cadena4 = cadenaNom + cadenaNum;
console.log(cadena4)

//Con una combinacion de varias instruccines realizar la misma accion que realiza el metodo replace de un string.



//Dada la cadena "profesor.sebastianv@ies-azarquiel.es", extraer solo el dominio y visualiarlo.

var cadenaDom = 'profesor.sebastianv@ies-azarquiel.es';
cadena5=cadenaDom.slice(20); 
console.log(cadena5)

//Dada la cadena "Pedro esta con un amigo Pedro Maria y con su primo Pedro Jose", contar las veces que aparece la palabra Pedro y en que posiciones.

const cadena1="Pedro esta con un amigo Pedro Maria y con su primo Pedro Jose";
var regex= /Pedro/g;
cadena6=cadena1.match(regex);
console.log(cadena6);