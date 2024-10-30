let timer;


window.onload = function () {

    //me traigo el meter
    let barraMeter = document.getElementsByTagName("meter")[0];
    //me traigo el progress
    let barraProgreso = document.getElementsByTagName("progress")[0];


    descargarMeter(barraMeter);
    cargarProgreso(barraProgreso);


}


function descargarMeter(barraMeter) {

    //traigo boton meter
    let botonMeter = document.getElementById("descargar");

    botonMeter.onclick = function () {

        timer = setInterval(() => {
            if (barraMeter.value === barraMeter.max) {
                console.log("La barra ha llegado al máximo");
                clearInterval(timer);
                botonMeter.disabled=false;

            }
            else {
                barraMeter.value += 10;
                console.log(barraMeter.value); //me suma de 10 en 10
                botonMeter.disabled=true;
            }


        }, 100);

    }
}


function cargarProgreso(barraProgreso) {

    //traigo boton progreso
    let botonProgreso = document.getElementById("cargar");

    botonProgreso.onclick = function () {

        timer = setInterval(() => {
            if (barraProgreso.value === barraProgreso.max) {
                console.log("La barra ha llegado al máximo");
                clearInterval(timer);
                botonProgreso.disabled=false;
            }
            else {
                barraProgreso.value += 10;
                console.log(barraProgreso.value); //me suma de 10 en 10
                botonProgreso.disabled=true;
            }



        }, 100);


    }
}