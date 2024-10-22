
window.onload = function () {
    let referenciaTD = document.getElementsByTagName("td");  
    //primero cargo la pagina y creo el atributo style para las celdas
    let listaColores = ["red","black","blue","yellow"];
    let contador=0;

    
    for (let celda of referenciaTD) {
        celda.setAttribute("style", "background-color: white")
        celda.onclick = function(){cambiarColor(this)}
    }
    
}




function cambiarColor(celda) {

        celda.setAttribute("style", listaColores[contador]);
        if(contador==3){
            contador==0;
        }
        contador++;
    
        /*if(celda.getAttribute("style")=="background-color: white"){
            console.log("hola estoy funcionando");
            celda.setAttribute("style", "background-color: black");
        }else{
            celda.setAttribute("style", "background-color: white");
        }*/
        


}



