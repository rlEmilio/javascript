window.onload = function(){

    //traigo contenedor
    let div = document.getElementsByClassName("contenido")[0];

    mostrarTexto(div);

}


function mostrarTexto(div){

    //traigo boton
    let boton = document.getElementsByTagName("button")[0];

   //traigo estilos del div
   let estilos = window.getComputedStyle(div);
   console.log(estilos.backgroundColor);


    boton.onclick = function(){
       if( estilos.backgroundColor === "rgb(0, 0, 0)"){
            div.style.backgroundColor = "white";

            boton.innerText="Ocultar";
       }else{
        div.style.backgroundColor = "black";
        boton.innerText="Mostrar";
       }
       


    }

}