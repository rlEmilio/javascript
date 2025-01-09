window.onload = function () {

    //hago prevent default de validar y enviar
    let boton_resetear = document.getElementsByName("boton_resetear")[0];
    boton_resetear.addEventListener("click", function (event) {
       
    });


    let boton_enviar = document.getElementsByName("boton_enviar")[0];
    
    boton_enviar.addEventListener("click", function (event) {
    
        //valido dni
        let dni = document.getElementsByName("dni")[0];
        if (dni.value === "") {
            alert("El dni no puede estar vacío");


        }


    });









}