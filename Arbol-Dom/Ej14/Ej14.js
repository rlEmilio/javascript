window.onload = () => {
  let titulos = document.getElementsByClassName("list__item");
  let items = document.getElementsByClassName("item__submenu");

resetearItems();


  for(let i = 0; i < titulos.length; i++) {
      titulos[i].onclick = function () {
          if (i != titulos.length - 1) {
              resetearItems();
              if(items[i].style.display=="none"){
                items[i].style.display = "block";  
              }
             
              
          }            
      }
  }

  function resetearItems () {
      for(let i = 0; i < items.length; i++) {
          items[i].style.display = "none";
      }
  }
}