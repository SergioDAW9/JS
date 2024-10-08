const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4,
};

const medidas={
    peso:"1Kg",
    medida:"1m"
};

// Spread operator o Rest operator , se utiliza en las frameworks de Java Script

const resultato = Object.assign(producto,medidas);

const resultato2={...producto,...medidas};

console.log(resultato2);