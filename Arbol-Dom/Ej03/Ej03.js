function sumar(){

let numero = document.getElementsByTagName("div")[0]; //esto es una referencia
let valor = parseInt(numero.innerText); //esto es el valor dentro de la referencia
valor+=1;
console.log(valor);
numero.innerText=valor;  //una vez que cambio el valor lo cambio en el innerhtml


}


function restar(){

    let numero = document.getElementsByTagName("div")[0];
    let valor = parseInt(numero.innerText);
    valor-=1;
    console.log(valor);
    numero.innerText=valor;
    
    
    }
    