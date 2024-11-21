window.onload = function(){

    //traigo campos de texto
    let formu = document.formulario;
   
    texto1 = formu.elements[0];
    texto2 = formu.elements[1];
   
    texto1.oninput = function(){
        texto2.value = texto1.value;



    }



}