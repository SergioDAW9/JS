// 1.- Crea una variable que represente la siguiente matriz M5X4, que representa las provincias limítrofes con Castilla-La Mancha 
 
const M5X4 = [
    ["Albacete", "Toledo", "Cuenca", "Guadalajara"],
    ["Ciudad Real", "Ávila", "Soria", "Segovia"],
    ["Jaén", "Granada", "Córdoba", "Zaragoza"],
    ["Teruel", "Alicante", "Valencia", "Murcia"],
    ["Cáceres", "Badajoz", "Madrid", "Castilla-La Mancha"]
];

console.table(M5X4);

// 2.- Dado M5X4 visualiza el contenido del elemento (3,2) y el elemento (2,3). Usando literals visualiza el mensaje “La ciudad (3,2) es …”, “La ciudad (2,3) es …”

const ciudad1= M5X4[2][1];
console.log(`La ciudad (3,2) es ${ciudad1}`);

const ciudad2= M5X4[1][2];
console.log(`La ciudad (2,3) es ${ciudad2}`);

// 3.-Muestra sólo los elementos que este en las posiciones (i,j) donde i=j, es decir (1,1),(2,2), etc.



// 4.- Recorre la matriz visualizando el nombre de la provincia junto su posición en la matriz. Debes usar foreach.



// 5.-Haz lo mismo que el ejercicio anterior pero usando for()



// 6.-Usando destructuring asigna a la variable fila2 la segunda fila de la matriz dada

const [, fila2]=M5X4;
console.log(fila2);

// 7.- Usando destructuring extraer las provincias de Jaén, Granada, Córdoba, Zaragoza

const [,, provincias]=M5X4;
console.log(provincias);

// 8.- Almacena en una variable, usando map, las provincias de la comunidad Andalucía.



// 9.- Haz lo mismo que el anterior pero con la comunidad de Castilla-Leon.

