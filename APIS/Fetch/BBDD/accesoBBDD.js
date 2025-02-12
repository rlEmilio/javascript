document.querySelector("button").addEventListener("click", function () {
  let salida = document.querySelector("#salida");
  const url = "http://www.jaimeweb.es/medac/ejemplos/addJuego.php";

  let formu = document.querySelector("form");
  let fd = new FormData(formu);
  //fd.append("carlos","el de los ***** largos")
  console.log("Datos del formulario: ");
  console.log(fd);
  console.log("---------------------------------------");

  const cabecera = {
    method: "POST",
    body: fd,
  };

  fetch(url,cabecera)
    .then(function (respuesta) {
      //Capturo la respuesta
      //console.log(respuesta);

      if (!respuesta.ok) {
        throw new Error("Error del Fetch: " + respuesta.status);
      }

      //DEvuelvo el formato texto o json
      return respuesta.json();
    })
    .then(function (datos) {
      //Capturo y gestiono los datos
      
      console.log(datos);
      for (const element of datos) {
        let fila = document.createElement("tr");
        let nombretd = document.createElement("td");
        let imagentd = document.createElement("td");
        let descripciontd = document.createElement("td");

        nombretd.innerText = element.nombre;
        descripciontd.innerText = element.descripcion;

        fila.appendChild(nombretd);
        fila.appendChild(descripciontd);

        let imagen = document.createElement("img");
        imagen.src = element.imagen;
        imagen.alt = "No hay imagen";
        imagentd.appendChild(imagen);

        fila.appendChild(imagentd);
        document.body.appendChild(fila);
       
      }
    })
    .catch(function (error) {
      alert("Problemas accediendo a la URL: " + error);
    });
});
