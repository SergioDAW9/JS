// 10.-Crea el objeto estudiante1 con la siguiente información

const estudiante10={
    nombre:"Luis",
    apellido: "Martín Rojas",
    edad: 22,
    nacionaliad: "Española",
    DNI: "2484637K"
};

// 11.- Al objeto anterior añádele este otro objeto llamado matrícula

const estudiante1={
    nombre:"Luis",
    apellidos: "Martín Rojas",
    edad: 22,
    nacionaliad: "Española",
    DNI: "2484637K",
    matricula: {
        NIE: 245887,
        IES: "Azarquiel",
        estudios: "2DAW",
        curso: "24/25"
    }
};

// 12.- ¿De que forma representarías la información de un estudiante que se ha matriculado en diferentes estudios a lo largo de 6 años?.

const matricula = {
    NIE: 245887,
    IES: "Azarquiel",
    estudios: "2DAW",
    curso: "24/25"
}

const estudiante12={
    nombre:"Luis",
    apellidos: "Martín Rojas",
    edad: 22,
    nacionaliad: "Española",
    DNI: "2484637K",
    matriculacion: [
        {NIE:245887, IES:"Carlos III", estudios:"1ERE", curso:"25/26"},
        {NIE:245887, IES:"Carlos III", estudios:"2ERE", curso:"26/27"},
        {NIE:245887, IES:"Alfonso X", estudios:"1SPS", curso:"27/28"}
    ]
};

// 13.-¿Cómo representarías el expediente académico de un alumno, por cada año cursado?.



// 14.-Usando destructuring almacena en las variables nombre, apellidos,dni,estudios, y muéstralos por pantalla en el siguiente formato “Luis Martín Rojas con dni 2484637K realiza los estudios de DAW”

const {nombre, apellidos, DNI, matricula: {estudios}} = estudiante1;
console.log(`${nombre} ${apellidos} con DNI: ${DNI} realiza los estudios de ${estudios}`);

// 15.- Bloque el objeto estudiante1 para que no pueda ser alterado por error.

"use strict";
Object.freeze(estudiante1);

// 16.- Crea un nuevo objeto estudiante2 con otra información pero con la misma estructura. ¿De que forma comprobarías si los dos objetos se trata de la misma persona?.

const estudiante2={
    nombre:"Alberto",
    apellidos: "Julian Ádago",
    edad: 19,
    nacionaliad: "Española",
    DNI: "9414567A",
    matricula: {
        NIE: 726509,
        IES: "Azarquiel",
        estudios: "2DAW",
        curso: "24/25"
    }
};

console.log(`Los nombres de los objetos coinciden?: ${estudiante1.nombre === estudiante2.nombre}`);

// 17.- En una matriz cuadrada la traza se obtiene sumando los elementos de la diagonal principal. Calcula la traza de la siguiente matriz, haciendo referencia a sus elementos por la posición que ocupan

