window.onload = function () {

    //traigo cosas
    let boton = document.getElementsByName("boton")[0];
    let section1 = document.getElementsByTagName("section")[0];
    let section2 = document.getElementsByTagName("section")[1];


    //funcion boton
    boton.addEventListener("click", function () {
        boton.disabled = true;

        let url = "https://fakestoreapi.com/products";

        fetch(url)
            .then(function (respuesta) {
                console.log(respuesta);

                if (!respuesta.ok) {
                    throw new Error("Error del Fetch: " + respuesta.status);
                }
                return respuesta.json();
            })
            .then(function (datos) {
                let respuesta = "";
                datos.forEach(element => {
                    let item = document.createElement("li");
                    respuesta = "NOMBRE: " + element.title +
                        " PRECIO: " + element.price + "<br>";
                    item.innerHTML = respuesta;
                    let imagen = document.createElement("img");

                    item.addEventListener("mouseenter", function () {
                        let src = element.image;
                        imagen.src = src;
                        section2.appendChild(imagen);
                    })

                    item.addEventListener("mouseleave", function () {
                        section2.removeChild(imagen);

                    })
                    section1.appendChild(item);
                });




            })
            .catch(function (error) {
                alert("Problemas accediendo a la URL: " + error);
            });


    });

}