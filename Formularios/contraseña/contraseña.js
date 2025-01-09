window.onload = function(){
 //traigo campo contrasena 
 let contrasena = document.getElementsByName("contrasena")[0];
 console.log(contrasena);

 //traigo boton
 let boton = document.getElementsByClassName("imagen")[0];
 

 //cuando se presione el boton se muestra la contraseña
 boton.addEventListener("mousedown", function(){
    contrasena.type="text";
 })

 boton.addEventListener("mouseup", function(){
    contrasena.type="password";
 })
    
}