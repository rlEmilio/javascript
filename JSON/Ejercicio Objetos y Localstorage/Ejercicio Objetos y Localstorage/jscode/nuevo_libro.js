window.onload = function () {
  //traigo cosas
  let boton_insertar = document.querySelector("form input[value='Insertar']");
  let titulo = document.getElementsByName("titulo")[0];
  let isbn = document.getElementsByName("isbn")[0];
  let paginas = document.getElementsByName("numpaginas")[0];
  let genero = document.getElementsByName("genero")[0];
  let anio = document.getElementsByName("anio")[0];
  let portada = document.getElementsByName("cover")[0];
  let autor = document.getElementsByName("autor")[0];
  let sinopsis = document.getElementsByName("resumen")[0];
  let boton_resetear = document.querySelector("form input[value='Resetear']");

  //funcion boton
  boton_insertar.addEventListener("click", function () {
    let nuevoLibro = {
      title: titulo.value,
      pages: paginas.value,
      genre: genero.value,
      cover: portada.value,
      synopsis: sinopsis.value,
      year: anio.value,
      ISBN: isbn.value,
      author: autor.value,
    };

   
  console.log(autor.value);


    //traigo libreria
    let libreria = JSON.parse(localStorage.getItem("Libreria"));
    libreria.push(nuevoLibro);
    localStorage.setItem("Libreria", JSON.stringify(libreria));

    window.location.href = "./inicio.html";
  });


  boton_resetear.addEventListener("click",function(){
    let formulario = document.getElementsByTagName("form")[0];
    formulario.reset();
})
};
