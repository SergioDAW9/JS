const carrito = [];

const producto1 = {
    nombre: "lentejas 300g",
    precio: 2
};

const producto2 = {
    nombre: "tomates 1Kg",
    precio: 3
};

const producto3 = {
    nombre: "atún",
    precio: 1
};

let resultado;
resultado = [...carrito,producto1];
resultado = [...resultado,producto2]
resultado = [producto3,...resultado]

// Forma de añadir 

