window.onload = function () {
  let formulario = document.formulario;
  let boton = formulario.elements["boton"];

  boton.addEventListener("click", function () {
    comprobar(formulario);
  });
};

function comprobar(formulario) {
  let campo1 = formulario.elements["campo1"];
  let campo2 = formulario.elements["campo2"];

  //compruebo si los campos están vacíos
  if (campo1.value == "" && campo2.value == "") {
    alert("Los campos están vacíos");
    //compruebo tamaño
  } else if (campo1.value.length != campo2.value.length) {
    alert("No son anagramas");
  } else {
    //guardo las letras del primer campo en un array
        let letras1 = campo1.value.split("");
        let anagrama = true;
        let i = 0;
    //compruebo que coincidan las letras en los dos campos.
        while (i < letras1.length && anagrama == true) {
        if (!campo2.value.includes(letras1[i])) {
            anagrama = false;
        }
        i++;
    }
        if (!anagrama) {
        alert("No son anagramas");
        } else {
            let letras2 = campo2.value.split("");
            //compruebo numero de apariciones
            let recuento1 = [];
            let contador = 0;
            //en este doble for cuento cuantas veces aparece la misma letra
            for (let i = 0; i < letras1.length; i++) {
                //reseteo contador
                contador = 0;
                for (let j = 0; j < letras1.length; j++) {

                if (letras1[i] == letras1[j]) {
                    contador++;
                }
                }
                recuento1.push(contador);
            }
            console.log(recuento1);

            let recuento2 = [];
            contador = 0;
            for (let i = 0; i < letras2.length; i++) {
                //reseteo contador
                contador = 0;
                for (let j = 0; j < letras2.length; j++) {
                if (letras2[i] == letras2[j]) {
                    contador++;
                }
                }
                recuento2.push(contador);
            }
            console.log(recuento2);

            //compruebo que los arrays de apariciones sean iguales
           let mismasApariciones = recuento1.every((valor, index) => valor === recuento2[index]);
           console.log(mismasApariciones);
            }
  }
}
