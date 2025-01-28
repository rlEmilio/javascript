const profesor = {
    tutor: {
        nombre: "Luis",
        edad: 48,
        DNI: "12345678Q",
        titulo_universitario: "Desarrollo web"
    }

};

const materia = {
    asignatura: {
        nombre: "Cliente",
        curso: 2,
        horas: 300
    }

};

const materia2 = JSON.parse(JSON.stringify(materia));
materia2.asignatura.nombre = "Servidor";
materia2.asignatura.curso = 1;
materia2.asignatura.horas = 3500;

const materia3 = JSON.parse(JSON.stringify(materia));
materia3.asignatura.nombre = "Inglés";
materia3.asignatura.curso = 2;
materia3.asignatura.horas = 2400;

const materia4 = JSON.parse(JSON.stringify(materia));
materia4.asignatura.nombre = "Empresa";
materia4.asignatura.curso = 3;
materia4.asignatura.horas = 3600;


let lista_asignatura = [{ materia }, { materia2 }, { materia3 }, { materia4 }];


const alumno = {
    nombre: "Emilio",
    edad: 26,
    ciclo: "Desarrollo web",
    curso: 2,
    nota_media: [8, 9, 10, 8, 9]

}

//agrego objetos a alumno
Object.assign(alumno,profesor);
Object.assign(alumno,materia); 

console.log(alumno);

let salida = "";


for (const key in alumno) {
    if ((key =! 'tutor') || (key != 'asignatura')) {
        salida += `${key}: ${alumno[key]}\n`;
    } else {
        for (const keyTutor in alumno.tutor) {
           salida += `${keyTutor}: ${alumno[keyTutor]}\n`;
        }

        for (const keyAsignatura in alumno.asignatura) {
            salida += `${keyAsignatura}: ${alumno[keyAsignatura]}\n`;
         }
    }  
}

console.log(salida);


