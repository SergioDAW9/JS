const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4,
};

console.log(producto);

//OBJECT CONSTRUCTOR , crea objetos añadiendolos 

function Producto(nombre,precio) {
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=true;
};

const Producto2=new Producto("Tablet",2000);
console.log(Producto2);

const Producto3=new Producto("Portatil 15 pulgadas",1000);
console.log(Producto3);
