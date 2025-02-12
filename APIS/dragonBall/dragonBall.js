window.onload = function(){

    let seccion = document.getElementById("informacion");

      const url = "https://dragonball-api.com/api/characters";
    
    
      const cabecera = {
        method: "GET",
      };
    
      fetch(url)
        .then(function(respuesta) {
          //Capturo la respuesta
          console.log(respuesta);
    
          if (!respuesta.ok) {
            throw new Error("Error del Fetch: " + respuesta.status);
          }
    
          //Devuelvo el formato texto o json
          return respuesta.json();
        })
        .then(function (datos) {
          //Capturo y gestiono los datos
          datos.items.forEach(element => {
            let imagen = document.createElement("img");
            imagen.src = element.image;
            imagen.setAttribute("width","150px");
            imagen.setAttribute("height","200px");

            let nombre = document.createElement("h3");
            let raza = document.createElement("p");
            let maxKi = document.createElement("p");

            nombre.innerText=element.name;
            raza.innerText=element.race;
            maxKi.innerText=element.maxKi;

            let articulo = document.createElement("article");
            articulo.appendChild(nombre);
            articulo.appendChild(imagen);
            articulo.appendChild(raza);
            articulo.appendChild(maxKi);

           

            //añado funcionalidad a articulo
            articulo.addEventListener("click",function(){
                localStorage.setItem("id",JSON.stringify(element.id));
                window.location.href = "infoPersonaje.html";
            })
            seccion.appendChild(articulo);
          
          });
          
          
        
        })
        .catch(function (error) {
          alert("Problemas accediendo a la URL: " + error);
        });
 
  
  
        

  }
  
  