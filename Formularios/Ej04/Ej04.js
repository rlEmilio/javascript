window.onload = function () {

    let formulario = document.formulario;
    //console.log(formulario);
    let botonDolares = formulario.elements[2];
    //console.log(boton);
    let botonEuros = formulario.elements[3];

    botonDolares.addEventListener("click", convertirDolares);
    botonEuros.addEventListener("click", convertirEuros);

}


//funcion que le añado al event listener.
function convertirDolares() {

    let cantidad = formulario.elements[0];
    let conversion = formulario.elements[1];
    let cifra = parseFloat(cantidad.value);

    if (isNaN(cifra) || cifra <= 0) {
        alert("Por favor, introduce un número válido");
    } else {
        conversion.value = (cifra * 1.17).toFixed(2) + "$";
    }


}

function convertirEuros() {

  
    let cantidad = formulario.elements[0];
    let conversion = formulario.elements[1];
    let cifra = parseFloat(cantidad.value);
    if (isNaN(cifra) || cifra <= 0) {
        alert("Por favor, introduce un número válido");
    } else {
        conversion.value = (cifra * 0.83).toFixed(2) + "€";
    }

}

