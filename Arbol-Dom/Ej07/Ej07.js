window.onload = function () {
  let celdas = document.getElementsByTagName("td"); //array de td
  //no se puede usar for each porque es específico de arrays, y esto devuelve una coleccion

  for (let element of celdas) {
    //asignar color de fondo en linea
    element.style.backgroundColor = "white";
    element.contador = 0; //se crea una nueva propiedad contador para cada td;
  }

  cambiarColor(celdas);
};

function cambiarColor(celdas) {
  let listaColores = ["red", "green", "blue", "yellow"];

  for (let element of celdas) {
    element.onclick = function () {
      this.style.backgroundColor = listaColores[this.contador];
      this.contador++;
      if (this.contador == 4) {
        this.contador = 0;
      }
    };
  }
}
