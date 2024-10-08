const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    unidades:4,
    informacion: {
        garantía: '1 año',
        seguro: 60,
        medidas: {
            peso:'6Kg',
            alto:'30 cm'
        },
        fabricacion:{
            pais:'China',
            año:'2022'
        }
    }
}

// Primer caso 

// const {nombre,informacion:{fabricacion}}=producto;
// console.log(nombre);
// console.log(fabricacion);

// const {nombre,informacion,informacion:{fabricacion}}=producto;
// console.log(nombre);
// console.log(informacion);
// console.log(fabricacion);

const {nombre,informacion,informacion:{fabricacion,fabricacion:{pais}}}=producto;
console.log(pais);