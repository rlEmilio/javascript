window.onload = function(){

//traigo cosas
let formulario = document.formulario;
let checkboxes = document.querySelectorAll('form input[type="checkbox"]');
let texto = formulario.elements["texto"];
//let boton = formulario.elements["boton"];

    for (let element of checkboxes) {
        element.onchange = function(){
            if(element.checked==true){
                texto.value += element.value + " ";
            }else{
                texto.value = texto.value.replace(element.value+" ", "");
            }
        }
    }
}