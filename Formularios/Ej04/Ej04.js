

window.onload = function () {
 
    let formulario = document.formulario;
    //console.log(formulario);
    let boton = formulario.elements["boton"];
    boton.addEventListener("click", function(){
        convertir(formulario);
    } );
  

}


//funcion que le añado al event listener.
function convertir(formulario) {

    console.log("hola");
    let cantidad = formulario.elements[0];
    let conversion = formulario.elements[1];
    let cifra = parseFloat(cantidad.value);
    let divisa = formulario.elements["divisa"];

    if (isNaN(cifra) || cifra <= 0) {
        alert("Por favor, introduce un número válido");
    } else {
        if(divisa.value=="euro"){
            conversion.value = (cifra*0.84).toFixed(2)+"€";
        }else{
            conversion.value = (cifra*1.17).toFixed(2)+"$";
        }
    }


}

