function mostrarMatriz(matriz) {
  let cadena = ""; //aqui guardo los valores de la matriz para mostrarla
  let suma = 0; //aqui guardare la suma de los valores de la matriz
  let mayor = 0; //variable para conocer el numero mayor de la matriz y asignarles a todos el mismo espacio

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] > mayor) {
        mayor = matriz[i][j]; //saco el mayor y la suma
      }
      suma += matriz[i][j];
    }
  }

  //cadena de valores con el mismo espacio
  //en tamano guardo la longitud del numero mayor, para ello convierto el mayor a string
  let tamano = mayor.toString().length;     
  for (let i = 0; i < matriz.length; i++) {
    cadena += "\n";
    for (let j = 0; j < matriz[i].length; j++) {
    //en valor guardo el elemento de la matriz como string
     let valor = matriz[i][j].toString();  
    //mientras la longitud del valor sea menor a la del mayor voy agregando ceros a la izquierda
     while(valor.length < tamano){
        valor="0"+valor;

     }
      cadena +=valor + " ";
    }
  }

  console.log(cadena);

  console.log("\nLa suma de los valores es: " + suma);

  /*multiplos de 3 = fizz
multiplos de 5 = buzz
multiplos de 3 y 5 = fizz buzz*/

  let copiaMatriz = [...matriz]; //me creo una copia pa no tocar la original

  let cadena2 = "";
  for (let i = 0; i < copiaMatriz.length; i++) {
    cadena2 += "\n";
    for (let j = 0; j < copiaMatriz[i].length; j++) {
      if (copiaMatriz[i][j] % 3 == 0 && copiaMatriz[i][j] % 5 == 0) {
        copiaMatriz[i][j] = "fizzbuzz";
      } else if (copiaMatriz[i][j] % 3 == 0) {
        copiaMatriz[i][j] = "fizz";
      } else if (copiaMatriz[i][j] % 5 == 0) {
        copiaMatriz[i][j] = "buzz";
      }

      cadena2 += copiaMatriz[i][j] + " ";
    }
  }

  console.log("\n" + cadena2);
}

mostrarMatriz([
  [1, 2, 3],
  [4, 15, 6],
  [7, 18, 9],
  [10, 300, 12],
  [15, 11, 12],
  
]);
