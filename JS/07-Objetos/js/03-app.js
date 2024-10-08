const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
};

console.log(producto.nombre);

//DESTUCTURING (!Nuevo)

const {nombre}=producto; // Muestra una propiedad del objeto
console.log(nombre);

const {imagen}=producto; // En caso de no existir el valor sera "undefined"
console.log(imagen);

const {disponible,unidades}=producto; // Une los valores de dos atributos
console.log(disponible,unidades);