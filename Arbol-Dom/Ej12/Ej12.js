window.onload = function(){

//me traigo referencia de imagen

let contenedor = document.getElementsByClassName("contenedor")[0];

moverDerecha(contenedor);

}

function moverDerecha(contenedor){

    let botonDerecha = document.getElementById("derecha"); //me traigo el boton derecha
    let estilos = window.getComputedStyle(contenedor); //esto es el style de la clase
   
    //console.log(marginLeft_actual);
   

    botonDerecha.onclick = function(){
     let marginLeft_actual =parseInt(estilos.marginLeft); //saco margen izquierdo actual
     marginLeft_actual = (marginLeft_actual+30)+"px";
     contenedor.style.marginLeft = marginLeft_actual;



    }

}