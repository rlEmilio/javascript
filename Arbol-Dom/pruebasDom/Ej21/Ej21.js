window.onload = function(){


//me traigo enlaces (todos)
let enlaces = document.getElementsByTagName("a");

console.log(enlaces);


for(let i = 0; i < enlaces.length;i++){

 enlaces[i].onmouseover = mostrarContenido;
}
};


function mostrarContenido(){

    //creo nodo div
    let div = document.createElement("div");

    //console.log(div);
    document.body.appendChild(div);

    //asigno clase al div
    div.setAttribute("class","estiloDiv");

    //creo nodo parrafo
    let parrafo = document.createTextNode("Esto es un enlace");

    //vinculo parrafo al div
    div.appendChild(parrafo);

}

