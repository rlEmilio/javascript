/*Pido un tamaño n de matriz al usuario;
creo una matriz con numeros aleatorios entre n y n*2,


a)obtener el numero mayor de la matriz y mnostrarlo por pantalla.
b)mostrar matriz por consola en filas y columnas.
c)sumar todos los elementos de la matriz y mostrar por pantalla.
d)aplicar fizz-buzz en los elementos de la matriz y devolver otra matriz con los cambios.
(si el número es múltiplo de 3 lo cambio y pongo la cadena fizz.
si es multiplo de 5 pongo buzz.
si es multiplo de 3 y 5 pongo fiz buzz)*/



let N = 0;
do {
    N = Number(prompt("Dame el tamaño de la matriz"));
} while (isNaN(N) || N < 2);

console.log(N);

matriz = [];
let fila = [];
let cadena = "";
let suma = 0;
for (let i = 0; i < N; i++) {
    fila = [];


    for (let j = 0; j < N; j++) {
        let aleatorio = parseInt(Math.random() * (N + 1) + N);

        fila[j] = aleatorio;
        cadena += aleatorio + " ";
        suma += aleatorio;

        matriz.push(fila);



    }
    cadena += "\n";
}
console.log(cadena);
console.log("\nLa suma total de los elementos de la matriz es: "+suma);
console.log("\n");


matriz.forEach(linea =>{

    linea.forEach(ele => {
        if(ele%3===0){
            return "fizz";
         }else if(ele%5===0){
            return "buzz";
         }else if(ele%3===0 && ele%5===0){
            return "fizz buzz";
         }
           return linea;


});
 
  
    
  });
   
     
    

  
  
  
   


console.log("\n"+fizzBuzz);