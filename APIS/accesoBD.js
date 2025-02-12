window.onload = function () {
  let salida = document.getElementById("secion");
  let boton = document.getElementById("boton");

  boton.addEventListener("click", function () {
    const url = "http://www.jaimeweb.es/medac/ejemplos/consulta.php";

    fetch(url)
      .then(function (respuesta) {
        console.log(respuesta);

        if (!respuesta.ok) {
          throw new Error("Error del Fetch: " + respuesta.status);
        }
        return respuesta.json();
      })
      .then(function (datos) {
        console.log(datos);
        let plantilla = "";
        for(let objeto of datos){
            plantilla += `<p>${objeto.nombre}</p>`;
        }

        salida.innerHTML = plantilla;
      })
      .catch(function(error){
        console.error("Error en la solicitud:", error);
      });
  });
};
