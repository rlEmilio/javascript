window.onload = function(){

    //traigo todos posibles enlaces
    let enlaces = document.getElementsByTagName("a");

    mostrarDiv(enlaces);


}

function mostrarDiv(enlaces){

    for (let element of enlaces) {
        element.onmouseenter = function(){
            
    //creo div y le asigno clase
    let div = document.createElement("div");
    div.setAttribute("class","estiloDiv");

    //agrego div al padre
    document.body.appendChild(div);

    //creo texto
    let url = element.href;
    let texto = document.createTextNode(url);
  
    //agrego texto al padre
    div.appendChild(texto);

    
    element.onmouseout = function(){  //meto esta funcion dentro de la otra para que el div esté definido
        document.body.removeChild(div); //borro div
    }

        }

    }


}