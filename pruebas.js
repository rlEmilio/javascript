
window.onload = function() {

    let div = document.getElementsByClassName("elemento")[0];
    
   

 
    let botonSubir = document.getElementsByTagName("button")[0];
    let botonBajar = document.getElementsByTagName("button")[1];

    botonBajar.onclick = function(){
       let estilos = window.getComputedStyle(div);
       let margenTop = parseInt(estilos.top);
        console.log(margenTop);

        div.style.top = (margenTop+50)+"px";
    }

 botonSubir.onclick = function(){
       let estilos = window.getComputedStyle(div);
       let margenTop = parseInt(estilos.top);
        console.log(margenTop);
    
            div.style.top = (margenTop-50)+"px";
            if(margenTop <= 0){
                div.style.top =0+"px";
            }
        
        
    }

    
}

