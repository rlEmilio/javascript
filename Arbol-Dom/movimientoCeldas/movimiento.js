//variables globales
let posicion = 0;
//color global por si me da por cambiarlo
let color = "darkorange";
//rgb del color
let rgb = "rgb(255, 140, 0)";


window.onload = function () {
  //me traigo el array de celdas
  let celdas = document.getElementsByTagName("td");

  //empezaré con la primera celda
  celdas[posicion].style.backgroundColor = "darkorange";

  moverArriba(celdas);
  moverAbajo(celdas);
  moverDerecha(celdas);
  moverIzquierda(celdas);
};

function moverArriba(celdas) {
  //saco boton
  let botonArriba = document.getElementById("arriba");

  /*console.log(estilos.getPropertyValue("background-color"));*/
  botonArriba.onclick = function () {
    //accedo al estilo de las celdas
    let estilos = window.getComputedStyle(celdas[posicion]);
    //console.log(posicion);

    if (posicion >= 4) {
      if (estilos.getPropertyValue("background-color") === rgb) {
        celdas[posicion - 4].style.backgroundColor = color;
        celdas[posicion].style.backgroundColor = "white";
        posicion -= 4;
      }
    }
  };
}

function moverAbajo(celdas) {
  //saco boton
  let botonAbajo = document.getElementById("abajo");

  /*console.log(estilos.getPropertyValue("background-color"));*/
  botonAbajo.onclick = function () {
    //accedo al estilo de las celdas
    let estilos = window.getComputedStyle(celdas[posicion]);
    //console.log(posicion);

    if (posicion < 12) {
      if (
        estilos.getPropertyValue("background-color") === rgb //si el color es rojo
      ) {
        celdas[posicion + 4].style.backgroundColor = color;
        celdas[posicion].style.backgroundColor = "white";
        posicion += 4;
      }
    }
  };
}

function moverDerecha(celdas) {
  //saco boton
  let botonDerecha = document.getElementById("derecha");

  /*console.log(estilos.getPropertyValue("background-color"));*/
  botonDerecha.onclick = function () {
    //accedo al estilo de las celdas
    let estilos = window.getComputedStyle(celdas[posicion]);
    //console.log(posicion);

    //si no estamos en la última columna (como es 4x4 podemos verificarlo si la posicion+1 es multiplo de 4);
    if ((posicion + 1) % 4 != 0) {
      if (
        estilos.getPropertyValue("background-color") === rgb //si el color es rojo
      ) {
        celdas[posicion + 1].style.backgroundColor = color;
        celdas[posicion].style.backgroundColor = "white";
        posicion += 1;
      }
    }
  };
}

function moverIzquierda(celdas) {
  //saco boton
  let botonIzquierda = document.getElementById("izquierda");

  /*console.log(estilos.getPropertyValue("background-color"));*/
  botonIzquierda.onclick = function () {
    //accedo al estilo de las celdas
    let estilos = window.getComputedStyle(celdas[posicion]);
    //console.log(posicion);

    //si no estamos en la primera columna (como es 4x4 podemos verificarlo si la posicion es multiplo de 4 o si es 0);
    if (posicion != 0 && posicion % 4 != 0) {
      if (
        estilos.getPropertyValue("background-color") === rgb //si el color es rojo
      ) {
        celdas[posicion - 1].style.backgroundColor = color;
        celdas[posicion].style.backgroundColor = "white";
        posicion -= 1;
      }
    }
  };
}
