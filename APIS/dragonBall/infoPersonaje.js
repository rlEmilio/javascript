window.onload = function () {
  let id = JSON.parse(localStorage.getItem("id"));
  //console.log(id);
  const url = "https://dragonball-api.com/api/characters/" + id;

  const cabecera = {
    method: "GET",
  };

  fetch(url)
    .then(function (respuesta) {
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
      //info personaje
      let nombre = document.createElement("h2");
      let descripcion = document.createElement("p");
      let imagen = document.createElement("img");
     
      nombre.innerText = datos.name;
      descripcion.innerText = datos.description;
      imagen.src = datos.image;
 
      document.body.appendChild(nombre);
      document.body.appendChild(descripcion);
      document.body.appendChild(imagen);

      
      //info planeta
       let nombrePlaneta = document.createElement("p");
       let descripcionPlaneta = document.createElement("p");
       let imagenPlaneta = document.createElement("img");
      
       nombrePlaneta.innerText=datos.originPlanet["name"];
       descripcionPlaneta.innerText=datos.originPlanet["description"];
       imagenPlaneta.src = datos.originPlanet["image"];

       document.body.appendChild(nombrePlaneta);
       document.body.appendChild(descripcionPlaneta);
       document.body.appendChild(imagenPlaneta);


    //transformaciones
        if (datos.transformations == "") {
            let mensaje = document.createElement("p");
            mensaje.innerText = "No tiene transformaciones";
            document.body.appendChild(mensaje);
        }else{
            datos.transformations.forEach(element => {
                let nombre = document.createElement("p");
                let ki = document.createElement("p");
                let imagen = document.createElement("img");
                imagen.src = element.image

                nombre.innerText=element.name;
                ki.innerText=element.ki;
                document.body.appendChild(nombre);
                document.body.appendChild(ki);
                document.body.appendChild(imagen);



            });
        }

      
    })
    .catch(function (error) {
      alert("Problemas accediendo a la URL: " + error);
    });
};
