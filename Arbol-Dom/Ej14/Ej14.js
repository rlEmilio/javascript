let contador = 0;

window.onload = function () {
  //me traigo los li de los submenus
  let submenus = document.querySelectorAll(".submenu");

  for (let element of submenus) {
    //escondo los submenus
    element.style.display = "none";
  }
  mostrarSubmenu(submenus);
};

function mostrarSubmenu(submenus) {
  //me traigo los li del menu principal
  let menuPrincipal = document.querySelectorAll(".menu > li");

  for (let i = 0; i < submenus.length; i++) {
    menuPrincipal[i].posicion = contador; //asigno posicion a cada li del menu
    contador++;

    menuPrincipal[i].onmouseover = function () {
      let posicionSubmenu = menuPrincipal[i].posicion;

      //escondo todos los submenus menos el del elemento que estoy clicando
      for (let i = 0; i < submenus.length; i++) {
        if (i != posicionSubmenu) {    
          submenus[i].style.display = "none";
        }
      }

      //alterno estados
      if (submenus[posicionSubmenu].style.display === "none") {
        submenus[posicionSubmenu].style.display = "";
      } else {
        submenus[posicionSubmenu].style.display = "none";
      }
    };
  }
}
