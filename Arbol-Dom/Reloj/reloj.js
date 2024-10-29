//cargo la funcion aqui para asegurarme que el div está creado correctamente antes de la llamada. (sino me da undefined)
window.onload = function () {
  reloj();
};

function reloj() {
  let reloj = document.getElementsByClassName("reloj")[0]; //me traigo el div

  //intervalo de un segundo
  setInterval(() => {
    //saco fecha con el objeto date, y extraigo horas, minutos y segundos
    //añado un 0 delante si el numero es menor de 2 cifras
    let fechaActual = new Date();   
    let horas = fechaActual.getHours();
    if (horas < 10) {
      horas = "0" + horas;
    }
    let minutos = fechaActual.getMinutes();
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    let segundos = fechaActual.getSeconds();
    if (segundos < 10) {
      segundos = "0" + segundos;
    }

    let tiempo = horas + ":" + minutos + ":" + segundos; //concateno
    reloj.innerText = tiempo; //cambio el texto del div
 
}, 1000);
}
