window.onload = function () {
  let formulario = document.formulario;
  let boton = formulario.elements["boton"];

  boton.addEventListener("click", function () {
    comprobar(formulario);
  });
};

function comprobar(formulario) {
  let campo1 = formulario.elements["campo1"];
  let campo2 = formulario.elements["campo2"];

  //compruebo si los campos están vacíos
  if (campo1.value == "" && campo2.value == "") {
    alert("Los campos están vacíos");
    //compruebo tamaño
 }else{
   let string_sin_espacios = campo1.value.toLowerCase().replaceAll(" ","");
   //console.log(string_sin_espacios);
   //dividir string por letras y ordenar alfabeticamente
   let letras = string_sin_espacios.split("").sort();
   let string_ordenado = letras.join("");
   console.log(string_ordenado);
  
   let string_sin_espacios2 = campo2.value.toLowerCase().replaceAll(" ","");
   //console.log(string_sin_espacios);
   //dividir string por letras y ordenar alfabeticamente
   let letras2 = string_sin_espacios2.split("").sort();
   let string_ordenado2 = letras2.join("");
   console.log(string_ordenado2);
  
   
    
 }
  
}
