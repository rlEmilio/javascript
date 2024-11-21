

window.onload = function(){

    let img = document.getElementsByTagName("img")[0];
    efecto(img);
}

function efecto(img){
img.onclick = function(){

//creo capa 
let capa = document.createElement("div");

document.body.appendChild(capa); 
capa.setAttribute("class","capa");
//console.log(capa);

//imagen vuelve a tamaño original
img.style.transform = "scale(1)";

//onclick en capa para borrarla y ajustar tamaño img
capa.onclick = function(){
    document.body.removeChild(capa);
    img.style.transform = "scale(0.5)";
}

}





}