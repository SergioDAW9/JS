const name = 'Amparo';
const apellido = 'Garcia';
console.log('Buenas tardes ' + name + ' ' + apellido)
console.log(`Buenas tardes  + ${name} ${apellido}`);

//typeof
console.log(typeof name);

//lengt
console.log(name.length);

//slice
console.log(name.slice(3,6));

//replace 
console.log(name.replace('paro','plificador'));

//trim
const texto = "        algo que        queria       "
console.log(texto.trim());

//split
const geolocation = 'Paseo San Eugenio, 21, 45003, Toledo, Toledo, Spain';
console.log(geolocation.split(','));