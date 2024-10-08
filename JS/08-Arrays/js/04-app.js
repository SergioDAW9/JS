const meses =['Enero, Febrero, Marzo, Abril, Mayo, Junio'];

meses[0] = 'Enesto';

meses[7] = 'Agosto'; //Crea una nueva posicion 

meses[10] = 'Diciembre'; // No crea las posiciones que hay en el medio, motivo de errores

console.table(meses);

// Declaracion de recorrido de Arrays