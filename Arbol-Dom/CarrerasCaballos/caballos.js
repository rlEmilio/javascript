let timer1;
let timer2;
let timer3;
let timer4;

window.onload = function () {
  //me traigo las imagenes
  let imagenes = document.getElementsByTagName("img");

  jugar(imagenes);
};

function jugar(imagenes) {
  //traigo boton
  let botonJuego = document.getElementsByTagName("button")[0];

  //traigo estilos
  //estilo imagen1
  let estilo1 = window.getComputedStyle(imagenes[0]);
  //estilo imagen2
  let estilo2 = window.getComputedStyle(imagenes[1]);
  //estilo imagen3
  let estilo3 = window.getComputedStyle(imagenes[2]);
  //estilo imagen4
  let estilo4 = window.getComputedStyle(imagenes[3]);

  //ancho contenedor
  let anchoContenedor = imagenes[0].parentElement.clientWidth;
  console.log(anchoContenedor);

  botonJuego.onclick = function () {
    //MOVIMIENTO 1
    timer1 = setInterval(() => {
      let aleatorio = Math.random() * (800 - 200) + 200;

      setTimeout(() => {
        let marginLeft_actual = parseInt(estilo1.marginLeft);

        if (parseInt(imagenes[0].style.marginLeft) >= anchoContenedor - 100) {
          clearInterval(timer1);
        } else {
          marginLeft_actual = marginLeft_actual + 30 + "px";
          imagenes[0].style.marginLeft = marginLeft_actual;
        }
      }, aleatorio);
    }, 200);

    //MOVIMIENTO 2
    timer2 = setInterval(() => {
      let aleatorio = Math.random() * (800 - 200) + 200;

      setTimeout(() => {
        let marginLeft_actual = parseInt(estilo2.marginLeft);

        if (parseInt(imagenes[1].style.marginLeft) >= anchoContenedor - 100) {
          clearInterval(timer2);
        } else marginLeft_actual = marginLeft_actual + 30 + "px";
        imagenes[1].style.marginLeft = marginLeft_actual;
      }, aleatorio);
    }, 200);

    //MOVIMIENTO 3
    timer3 = setInterval(() => {
      let aleatorio = Math.random() * (800 - 200) + 200;

      setTimeout(() => {
        let marginLeft_actual = parseInt(estilo3.marginLeft);

        if (parseInt(imagenes[2].style.marginLeft) >= anchoContenedor - 100) {
          clearInterval(timer3);
        } else {
          marginLeft_actual = marginLeft_actual + 30 + "px";
          imagenes[2].style.marginLeft = marginLeft_actual;
        }
      }, aleatorio);
    }, 200);

    //MOVIMIENTO 4
    timer4 = setInterval(() => {
      let aleatorio = Math.random() * (800 - 200) + 200;

      setTimeout(() => {
        let marginLeft_actual = parseInt(estilo4.marginLeft);

        if (parseInt(imagenes[3].style.marginLeft) >= anchoContenedor - 100) {
          clearInterval(timer4);
        } else marginLeft_actual = marginLeft_actual + 30 + "px";
        imagenes[3].style.marginLeft = marginLeft_actual;
      }, aleatorio);
    }, 200);

  
  };
}

