window.onload = function () {

    let formulario = document.formulario;
    //console.log(formulario);
    let boton = formulario.elements[2];
    //console.log(boton);

    boton.addEventListener("click", convertir);

}


//funcion que le añado al event listener.
function convertir() {
    let cantidad = formulario.elements[0];
    let conversion = formulario.elements[1];

    let cifra = 0;
    //console.log(cantidad.value);
    do {
        let cifra = parseFloat(cantidad.value);
        console.log(cifra);

    

        if (isNaN(cifra) || cifra <= 0 || cifra == "") {
            alert("Introduce un número mayor a 0, por favor");
        }
    } while (isNaN(cifra) || cifra <= 0 || cifra == "")



}