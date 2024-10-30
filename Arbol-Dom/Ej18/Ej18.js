let timer;

window.onload = function(){


    //traigo barra progeso
    let barraProgreso = document.getElementsByTagName("progress")[0];

    //me traigo el div
    let monedas = document.getElementsByClassName("monedas")[0];


    cargarProgreso(barraProgreso, monedas);

}

function cargarProgreso(barraProgreso, monedas){

    //traigo boton progreso
    let botonProgreso = document.getElementsByTagName("button")[0];

    botonProgreso.onclick = function () {

        timer = setInterval(() => {
            if (barraProgreso.value === barraProgreso.max) {
                let valor = parseInt(monedas.innerText);
                valor+=1;
                valor+="€";
                monedas.innerText=valor;
                console.log(monedas.innerText);
                console.log("La barra ha llegado al máximo");
                barraProgreso.value=0;
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
