window.onload = function () {

    //div que contendrá el error
    let div = document.createElement("div");


    //REFERENCIAS
    //email
    let email = document.getElementsByName("email")[0];
    //copia email
    let copiaEmail = document.getElementsByName("remail")[0];
    //aficiones
    let aficiones = document.querySelectorAll('form input[type="checkbox"]');
    //area texto
    let textArea = document.getElementById("afiText");
    //nombre
    let campoNombre = document.getElementsByName("nombre")[0];
    //clave 
    let campoClave = document.getElementsByName("clave")[0];
    //reclave
    let campoReClave = document.querySelector('form input[placeholder="Vuelve a introducir la clave"]');
    //respuesta
    let campoRespuesta = document.getElementsByName("respuesta")[0];
    //edad
    let campoEdad = document.getElementsByName("edad")[0];
    //capcha
    let campoCapcha = document.querySelector('form input[placeholder="Introduce las letras de la imagen"]')
    //preguntas
    let campoPreguntas = document.getElementsByName("pregunta")[0];
    let Preguntas = document.getElementsByTagName("option");
    //console.log(Preguntas[0].selected);
    //radio
    let radios = document.querySelectorAll("form input[type='radio']");
    //condiciones
    let condiciones = document.getElementsByTagName("input")[14];








    //FUNCIONALIDAD 1
    //copio el contenido del campo email a remail
    email.addEventListener("input", function () {
        copiaEmail.value = email.value;
    });

    //FUNCIONALIDAD 2
    for (let i = 0; i < aficiones.length - 1; i++) {
        aficiones[i].onchange = function () {
            if (aficiones[i].checked == true) {
                textArea.value += aficiones[i].value + "\n";
            } else {
                textArea.value = textArea.value.replace(aficiones[i].value + "\n", "");
            }
        }
    }



    //VALIDACIONES PASO A PASO
    //cancelo submit del boton 
    let botonEnviar = document.querySelector("form input[value='Enviar']");
    botonEnviar.addEventListener("click", function (event) {
        event.preventDefault();

        // VALIDO NOMBRE
        if (campoNombre.value == "") {
            mostrarError("El nombre no puede quedar vacío");
            campoNombre.focus();
            campoNombre.style.border = "2px solid red";

        } else {
            //VALIDO CLAVE
            campoNombre.style.border = "";
            let claveCorrecta = false;
            div.innerText = "";
            if (campoClave.value == "") {
                mostrarError("La clave no puede estar vacía");
            }
            else {
                if (campoClave.value.length < 8) {
                    mostrarError("La clave no puede ser menor a 8 digitos");
                }
                else {
                    if (campoClave.value == campoNombre.value) {
                        mostrarError("la clave no puede coincidir con el nombre");

                    } else {
                        claveCorrecta = true;
                    }
                }
            }

            if (!claveCorrecta) {
                campoClave.focus();
                campoClave.style.border = "2px solid red";

            } else {
                campoClave.style.border = "";
                //VALIDO REPITE CLAVE
                //aqui no me hace falta comprobar que la repeticion está vacía
                if (campoReClave.value !== campoClave.value) {
                    mostrarError("Ambas contraseñas deben coincidir");
                    campoClave.value = "";
                    campoReClave.value = "";
                    campoReClave.focus();

                } else {
                    //VALIDO PREGUNTA
                    let preguntaCorrecta = false;

                    if (Preguntas[0].selected) {
                        mostrarError("Debes elegir una opción que no sea la primera");
                    } else {
                        preguntaCorrecta = true;

                    }
                    if (!preguntaCorrecta) {
                        campoPreguntas.focus();

                    } else {

                        //VALIDO RESPUESTA
                        let respuestaCorrecta = false;
                        if (campoRespuesta.value == "") {
                            mostrarError("La respuesta no puede estar vacía");

                        } else {
                            if (campoRespuesta.value.length < 6) {
                                mostrarError("La respuesta debe tener como mínimo 6 carácteres");

                            } else {
                                respuestaCorrecta = true;
                            }
                        }

                        if (!respuestaCorrecta) {
                            campoRespuesta.focus();
                            campoRespuesta.style.border = "2px solid red";
                        } else {
                            campoRespuesta.style.border = "";
                            //VALIDO RADIO
                            if (!radios[0].checked && !radios[1].checked && !radios[2].checked) {
                                mostrarError("Debes seleccionar al menos una opción radio");
                                radios[0].focus();
                            } else {
                                //VALIDO EDAD
                                let edadCorrecta = false;

                                if (isNaN(campoEdad.value)) {
                                    mostrarError("La edad debe ser un número");

                                } else {
                                    if (campoEdad.value < 3 || campoEdad.value > 99) {
                                        mostrarError("la edad tiene que star entre 3 y 99");

                                    } else {
                                        edadCorrecta = true;
                                    }
                                }


                                if (!edadCorrecta) {
                                    campoEdad.focus();
                                    campoEdad.style.border = "2px solid red";
                                } else {
                                    campoEdad.style.border = "";
                                    //VALIDO SEGURIDAD
                                    let capchaCorrecto = false;
                                    if (campoCapcha.value == "") {
                                        mostrarError("el capcha no puede estar vacío");

                                    } else {
                                        if (campoCapcha.value !== "QGPHJD") {
                                            mostrarError("El código capcha no coincide con la imagen");

                                        } else {
                                            capchaCorrecto = true;
                                        }
                                    }

                                    if (!capchaCorrecto) {
                                        campoCapcha.focus();
                                        campoCapcha.style.border = "2px solid red";
                                    } else {
                                        campoCapcha.style.border = "";
                                        //VALIDO CONDICIONES DE USO
                                        if (!condiciones.checked) {
                                            mostrarError("Debes aceptar las condiciones de uso");
                                            condiciones.focus();

                                        } else {
                                            //TODO CORRECTO, ENVIO FORMULARIO.
                                            window.location.href = "resultado.html";
                                        }

                                    }
                                }

                            }
                        }
                    }

                }

            }
        }



    })






    function mostrarError(mensaje) {
        div.innerText = "";
        let texto = document.createTextNode(mensaje);
        div.setAttribute("id", "errores");
        div.appendChild(texto);
        formu.appendChild(div);
    }

}