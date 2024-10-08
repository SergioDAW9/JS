// Objetos anidados a objetos

const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    unidades:4,
    informacion: {
        garantía: '1 año',
        seguro: 60
    }
}

console.log(producto.informacion); // Muestra el objeto dentro del mismo