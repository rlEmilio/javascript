/* cambiar la T por la U 
Las entradas solo pueden ser G, C, A o T  .. o vacio*/

let entrada;
const cadena = ["G", "C", "A", "T", " "];
let valido=false;
let caracteres =[];

do {
  entrada = prompt("Dame una cadena de ADN");

  caracteres = entrada.split("");

  for (let i = 0; i < caracteres.length; i++) {
    if (!cadena.includes(caracteres[i])) {
      valido = false;
    } else {
      valido = true;
    }
  }

  //console.log(caracteres);
} while (!valido);

let ARN = caracteres.map(function(ele){
if(ele=="T"){
    return "U";
}
return ele;
});

console.log(ARN);
