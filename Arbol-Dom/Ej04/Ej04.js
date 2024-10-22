let contador = 1;

function avanzar() {
  let imagen = document.getElementsByTagName("img")[0];
  contador++;
  imagen.setAttribute("src", "imagenes/img" + contador + ".jpg");
  botonesHabilitados();
 
}

function retroceder() {
  let imagen = document.getElementsByTagName("img")[0];
  contador--;
  imagen.setAttribute("src", "imagenes/img" + contador + ".jpg");
  botonesHabilitados();
}

function botonesHabilitados(){
    let botonAvanzar = document.getElementById("botonAvanzar");
    if (contador == 5) {
      botonAvanzar.setAttribute("disabled","true");
    } else {
      botonAvanzar.removeAttribute("disabled");
    }

    let botonRetroceder = document.getElementById("botonRetroceder");
  if (contador == 1) {
    botonRetroceder.setAttribute("disabled","true");
  }else {
    botonRetroceder.removeAttribute("disabled");
  }
}
