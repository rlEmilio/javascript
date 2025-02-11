window.onload = function(){

    //traigo boton y salida
    let boton = document.getElementsByTagName("button")[0];
    let salida = document.getElementById("salida");

    let url = "https://jsonplaceholder.typicode.com/comments";

    boton.addEventListener("click", function(){

        fetch(url)
        .then(function(respuesta){
            console.log(respuesta);

            if(!respuesta.ok){
                throw new Error("Error del Fetch: "+respuesta.status);
            }
            return respuesta.json();
        })
        .then(function(datos){
            let res = "";
            console.log(datos);

            datos.forEach(element => {
                res+= `${element.body}\n`;
                
            });
            
            salida.innerHTML=res;


        })
        .catch(function(error){
           alert("Problemas accediendo a la URL: "+error); 
        });
        



    })
   


}