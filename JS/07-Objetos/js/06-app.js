let estudiante={
    nombre:"Pablo",
    apellido:"Nogales Puebal",
    edad:28,
    estado:"soltero"
}

const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
}

delete producto.precio;
delete estudiante.edad;

// Si deja borrar el campo de las variables // No funciona