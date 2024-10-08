const producto='Monitor 20 pulgadas';

// Repeticion de candenas 
const texto=' en promocion'.repeat(3);

const cadenaFinal=`${producto}${texto}!!!!!!!!!!!!`;
console.log(cadenaFinal);

// Separa por espacios en blanco
const actividad='Estoy esperando que me hagan la cena';
const cadenaSplit=actividad.split(" ");
console.log(cadenaSplit);

// Separa por , 
var hobbies='Leer, escuchar musica, escribir diarios, hacer la cama, lavar los platos'
const cadenaHobbies=hobbies.split(",");
console.log(cadenaHobbies);


// var cadena='Pedro está con sus amigos Pedro Maria y Pedro Luis';
// var regex= /Pedro/g;
// total=cadena.match(regex);
// console.log(total);

// Pasar a mayusculas o minusculas
var cadenaMax = producto.toUpperCase();
var CadenaMin = producto.toLowerCase();

var precio = 200;
var precioStr = precio.toString();