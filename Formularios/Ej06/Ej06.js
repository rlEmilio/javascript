window.onload = function(){

//traigo checkboxes
let checkboxes = document.querySelectorAll("input[type=checkbox]");
//console.log(checkboxes);

for(let i=0; i<checkboxes.length;i++){
    checkboxes[i].addEventListener("change", function(){
        anadir()
    });
}

    
}


function anadir(element){
    let lista = document.getElementsByName("lista")[0];
   if(!lista.contains(element)){
     
    }
        


}