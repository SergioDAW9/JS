const producto='Monitor 20 pulgadas';

//Remplaza palabras por otras
var nuevacadena=producto.replace('pulgadas', '"');
console.log(nuevacadena);

nuevacadena=producto.replace('Monitor', 'Monitor curvo');
console.log(nuevacadena);


//slice partir
nuevacadena=producto.slice(0,10); //Devuelve los 10 primeros
nuevacadena=producto.slice(8); //Desde ese numero hatas el final
console.log(nuevacadena);

//Alternativa slice
nuevacadena=producto.substring(0,10);

//Extraer un caracter unico
const usuario='Rodrigo';
charCadena=usuario.charAt(0);
console.log(charCadena);