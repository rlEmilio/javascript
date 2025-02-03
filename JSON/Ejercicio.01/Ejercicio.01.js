window.onload = function () {
  const profesor = {
    tutor: {
      nombre: "Luis",
      edad: 48,
      DNI: "12345678Q",
      titulo_universitario: "Desarrollo web",

      mostrar() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.DNI}\nTitulo: ${this.titulo_universitario}\n`;
      },

      cambiarNombre(nombre) {
        this.nombre = nombre;
      },
    },
  };

  const asignatura = {
    nombre: "Cliente",
    curso: 2,
    horas: 300,

    mostrar() {
      return `Nombre: ${this.nombre}\nCurso: ${this.curso}\nHoras: ${this.horas}\n`;
    },

    cambiarHoras(horas) {
      this.horas = horas;
    },
  };

  const asignatura2 = JSON.parse(JSON.stringify(asignatura));
  asignatura2.nombre = "Servidor";
  asignatura2.curso = 1;
  asignatura2.horas = 3500;

  const asignatura3 = JSON.parse(JSON.stringify(asignatura));
  asignatura3.nombre = "Inglés";
  asignatura3.curso = 2;
  asignatura3.horas = 2400;

  const asignatura4 = JSON.parse(JSON.stringify(asignatura));
  asignatura4.nombre = "Empresa";
  asignatura4.curso = 3;
  asignatura4.horas = 3600;

  let asignaturas = [asignatura, asignatura2, asignatura3, asignatura4];

  const alumno = {
    nombre: "Emilio",
    edad: 26,
    ciclo: "Desarrollo web",
    curso: 2,
    nota_media: [8, 7, 9, 8],

    calcularMedia() {
      let media = 0;
      this.nota_media.forEach((element) => {
        media += element;
      });
      return (
        "La media del alumno es: " + (media / this.nota_media.length).toFixed(2)
      );
    },

    mostrarMediaAsignaturas() {
      let cadena = "NOTAS MEDIAS\n";
      for (let i = 0; i < this.asignaturas.length; i++) {
        cadena += asignaturas[i].nombre + ": " + this.nota_media[i] + "\n";
      }
      return cadena;
    },

    mostrar() {
      let cadena = "";
      cadena +=
        "DATOS TUTOR:\n" + profesor.tutor.mostrar() + "\nDATOS ALUMNO:\n";
      for (const key in this) {
        if (typeof this[key] !== "object" && typeof this[key] !== "function") {
          cadena += `${key}: ${this[key]}\n`;
        }
      }
      cadena += "\nDATOS ASIGNATURAS:\n";
      this.asignaturas.forEach((element) => {
        cadena += "Asignatura:\n";
        for (const key in element) {
          if (typeof element[key] !== "function") {
            cadena += `${key}: ${element[key]}\n`;
          }
        }
        cadena += "\n";
      });

      cadena+= this.mostrarMediaAsignaturas();

      return cadena;
    },
  };

  //agrego objetos a alumno
  Object.assign(alumno, profesor);
  alumno.asignaturas = asignaturas;

  console.log(alumno);

  let salida = "";

  salida += "ALUMNO:\n";
  for (const key in alumno) {
    if (key !== "tutor" && key !== "asignaturas") {
      salida += `${key}: ${alumno[key]}\n`;
    } else {
      if (key === "tutor") {
        salida += "\nTUTOR:\n";
        for (const keyTutor in alumno.tutor) {
          salida += `${keyTutor}: ${alumno.tutor[keyTutor]}\n`;
        }
      } else {
        salida += "\nASIGNATURAS:\n";
        alumno.asignaturas.forEach((element) => {
          salida += "Asignatura:\n";
          for (const key in element) {
            salida += `${key}: ${element[key].nombre}\n`;
          }
          salida += "\n";
        });
      }
    }
  }

  let miDiv = document.getElementsByClassName("mostrarAlumnos")[0];
  miDiv.innerText = salida;

  // profesor.tutor.cambiarNombre("Emilio");
  // console.log(profesor.tutor.mostrar());

  // asignatura.cambiarHoras(4);
  // console.log(asignatura.mostrar());

  // console.log(alumno.calcularMedia());

  // console.log(alumno.mostrarMediaAsignaturas());

  console.log(alumno.mostrar());
};
