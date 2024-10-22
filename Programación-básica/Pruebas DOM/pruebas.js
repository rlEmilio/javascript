



function guille(){
    let parras = document.getElementsByTagName("table")[0];
    //parras.width="1500px";
    //parras.className="pepe";
    parras.setAttribute("width", 1000);
    let obtener = parseInt(parras.getAttribute("height"));
    console.log(parras);
    console.log((obtener+3));

}

window.onload = function(){


let bombi = document.getElementById("bombom");

document.bgColor="#fff";
bombi.innerHTML = "<b>acabo de cargarme el arbol dom </b>";

console.log(bombi.innerHTML);

console.log(bombi.innerText);

}

/*
acceder a atributos:
1) notacion punto
2) get y set
*/