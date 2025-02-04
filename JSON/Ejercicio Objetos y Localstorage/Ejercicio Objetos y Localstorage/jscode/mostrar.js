window.onload = function(){

    //traigo datos
    let datos = JSON.parse(localStorage.getItem("Datos"));
    console.log(datos);

    //traigo section
    let seccion = document.getElementById("info");

    //me creo la tabla con sus celdas y to eso
    let h2 = document.createElement("h2");
    h2.innerText = datos.title;
    seccion.appendChild(h2);
   
    let tabla = document.createElement("table");
    for (const key in datos) {
       if(key!="title" && key!="cover"){
      let fila = document.createElement("tr");
      let clave_dato = document.createElement("td");
      let valor = document.createElement("td");

      clave_dato.innerText = key;

      //saco solo el nombre del objeto autor
      //el primer caso es cuando subo el autor desde nuevo_libro (no es un objeto)
      if (key=="author" && typeof key != Object) {
        valor.innerText = datos[key];
      }else if(key=="author"){
        valor.innerText = datos[key]["name"];
      }
      else{
        valor.innerText = datos[key];
      }
     
      fila.appendChild(clave_dato);
      fila.appendChild(valor);

      tabla.appendChild(fila);
      
       }
    }

    seccion.appendChild(tabla);


    //imagen
    let imagen = document.createElement("img");
    imagen.src = datos.cover;
    imagen.setAttribute("class","portada");
    seccion.appendChild(imagen);


}