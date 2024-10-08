const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
};

//Añadir nuevas propiedades sin acceder al objeto principal
producto.imagen="imagen.jpg";

//Borrar nuevas propiedades sin acceder al objeto principal
delete producto.disponible;