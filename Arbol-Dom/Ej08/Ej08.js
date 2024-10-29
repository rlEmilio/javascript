window.onload = function(){

    cambiarImagen();



}


function cambiarImagen(){
    //referencia imagen
    let imagen = document.getElementsByTagName("img")[0];
    imagen.onmouseover = function(){
        imagen.src="imagenes/img2.png";

    }

    imagen.onmouseleave = function(){
        imagen.src="imagenes/img1.png";

    }


}