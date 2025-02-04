window.onload = function(){

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

  

    //funcion boton
    boton_insertar.addEventListener("click", function(){
      
        let nuevoLibro = {
            "title": titulo.value,
            "pages": paginas.value,
            "genre": genero.value,
            "cover": portada.value,
            "synopsis": sinopsis.value,
            "year": anio.value,
            "ISBN": isbn.value,
            "author": autor.value
        };

        console.log(nuevoLibro);

        //subo nuevo libro
        localStorage.setItem("Nuevo_Libro", nuevoLibro);

        //traigo libreria
        let libreria = localStorage.getItem(("Libreria"));
       
        
    
        window.location.href("./inicio.html");
          
    })
    
    
   
    

}