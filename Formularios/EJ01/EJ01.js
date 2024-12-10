window.onload = function(){

//traigo formulario
let formu = document.form;


//traigo boton
let boton = formu.elements[2];
console.log(boton);

boton.onclick = function(){

    console.log("esta entrando en la funcion");
    let texto1 = formu.elements[0];
    let texto2 = formu.elements[1];
    
    //console.log(texto2);
    let valorTexto = texto1.value;
    console.log(valorTexto);
    texto2.value = valorTexto;



}

}









