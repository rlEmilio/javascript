
//recoger numero
function recogerNumero(mensaje) {
    let numero = 0;

    do {
        numero = parseFloat(prompt("Introduce un número"));

    } while (isNaN(numero));

    return numero;

}


//sumar
function sumar(num1, num2) {
    return (num1 + num2);
}

//restar
function restar(num1, num2) {
    return (num1 - num2);
}

//multiplicar
function multiplicar(num1, num2) {
    return (num1 * num2);
}

//dividir
function dividir(num1, num2) {
    return (num1 / num2);
}

//recoger operacion

function recogerOperacion() {
    let valido = false;
    const operaciones = ["S", "R", "M", "D"];
    let operacion = " ";

    do {
        operacion = prompt("¿Que operación quieres realizar? S, R, M, D").toUpperCase();

        if (!operaciones.includes(operacion)) {
            valido = false;
        } else {
            valido = true;
        }

    } while (!valido);

    return operacion;
}

//funcion principal
function principal() {
    let num1 = recogerNumero("Dame el número uno");
    let num2 = recogerNumero("Dame el número dos");
    //console.log(recogerOperacion());
    let resultado = 0;
    switch (recogerOperacion()) {
        case "S": resultado = sumar(num1, num2);
            break;
        case "R": resultado = restar(num1, num2);
            break;
        case "M": resultado = multiplicar(num1, num2);
            break;
        case "D": resultado = dividir(num1, num2);
            break;


    }
    alert(resultado);

}