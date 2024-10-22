window.onload = function () {

    //me traigo el array de celdas
    let celdas = document.getElementsByTagName("td");


    moverArriba(celdas);
    moverAbajo(celdas);




}


function moverArriba(celdas) {

    console.log("entra en la funcion");
    //saco boton
    let botonArriba = document.getElementById("arriba");
    let contador = 0;

    for (let element of celdas) {
        //accedo al estilo de las celdas
        let estilos = window.getComputedStyle(element);

        //obtengo posiciones del array
        
        element.posicion = contador;
        contador++;
        console.log(element.posicion);


        /*console.log(estilos.getPropertyValue("background-color"));*/
        botonArriba.onclick = function () {
             
            
                if (element.posicion > 4) {
                    if (estilos.getPropertyValue("background-color") === "rgb(255, 255, 255)") {
                    celdas[element.posicion - 4].style.backgroundColor = "red";
                    celdas[element.posicion].style.backgroundColor = "white";
                    element.posicion=element.posicion-4;

                }

            }

        }
    }
}


function moverAbajo(celdas) {

    console.log("entra en la funcion");
    //saco boton
    let botonAbajo = document.getElementById("abajo");
    let contador = 0;

    for (let element of celdas) {
        //accedo al estilo de las celdas
        let estilos = window.getComputedStyle(element);

        //obtengo posiciones del array
        
        element.posicion = contador;
        contador++;
        console.log(element.posicion);


        /*console.log(estilos.getPropertyValue("background-color"));*/
        botonAbajo.onclick = function () {
             
            
                if (element.posicion < 12) {
                    if (estilos.getPropertyValue("background-color") === "rgb(255, 255, 255)") {
                    celdas[element.posicion + 4].style.backgroundColor = "red";
                    celdas[element.posicion].style.backgroundColor = "white";
                    element.posicion=element.posicion+4;

                }

            }

        }
    }
}