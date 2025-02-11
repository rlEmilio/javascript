window.onload = function(){


    //traigo div y boton
    let contenedor = document.getElementById("contenedor_imagen");
    let boton = document.getElementsByName("obtener_imagen")[0];


 let url = "https://dog.ceo/api/breeds/image/random";

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

            contenedor.innerHTML="";
            let img = document.createElement("img");
            img.src = datos.message;
            contenedor.appendChild(img);

        })
        .catch(function(error){
           alert("Problemas accediendo a la URL: "+error); 
        });
        
})
}