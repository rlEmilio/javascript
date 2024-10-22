//1 funcion que recibe una matriz y devuelve true si hay algún elemento repetido.
//devuelve false si todos los elementos son diferentes;
//2 funcion que reciba dos cadenas y devuelva true si son anagramas o false si no lo son


function elementosRepetidos(matriz) {
    let repetido = false;
    let valores = [];

    for (let i = 0; i < matriz.lenght; i++) {

        for (let j = 0; j < matriz.lenght; j++) {

            
            if (valores.includes[matriz[i][j]]) {
                repetido = true;
            }

            valores.push(matriz[i][j]);

        }

    }
    console.log(valores);
    return repetido;
   
}


console.log(elementosRepetidos([[1],[2],[4],[2],[3],[7],[8]]));


function anagramas(cadena1, cadena2) {
    
    for(let i = 0; i < cadena1.length; i++) {
       
        if (!cadena1.includes(cadena2[i])) {
            return false;
        }
    
    }
    return true;
}

console.log(anagramas("hola","aloh"));