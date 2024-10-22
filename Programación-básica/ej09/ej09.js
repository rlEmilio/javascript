
let numero =0;
do{

numero = prompt("Dame un número positivo mayor a 2");


}while(numero<=2 || isNaN(numero));

let matriz = [];
let fila = [];
let aux =numero*numero;

for(let i=1; i <= aux ;i++){
    fila.push(i*numero);
    if(fila.length==numero){
        matriz.push(fila);
        fila =[];
    }


}

resultado= "";
for(let i=0; i<matriz.length;i++){
    resultado+="\n";
 for(let j=0; j<matriz.length;j++){

    if(matriz[j][i]<10){
        resultado+="0"+matriz[j][i]+" ";

    }else{
        resultado+=matriz[j][i]+" ";
    }
 }

}
console.log(resultado);