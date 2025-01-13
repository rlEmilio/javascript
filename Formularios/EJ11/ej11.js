window.onload = function () {

  let div = document.createElement("div");

  //referencias
  let formu = document.getElementsByName("formu")[0];
  let boton_resetear = document.getElementsByName("boton_resetear")[0];
  let boton_enviar = document.getElementsByName("boton_enviar")[0];
  let campoDNI = document.getElementsByName("dni")[0];
  let campoNombre = document.getElementsByName("nombre")[0];
  let campoApellido = document.getElementsByName("apellido")[0];
  let campoFecha = document.getElementsByName("fecha")[0];
  let campoWeb = document.getElementsByName("web")[0];
  let campoContrasena = document.getElementsByName("contrasena")[0];

  //funcion para resetear campos.
  boton_resetear.addEventListener("click", function (event) {
    event.preventDefault();
    let listaInput = document.getElementsByTagName("input");
    for (const element of listaInput) {
      element.value = "";
    }
  });

  boton_enviar.addEventListener("click", function (event) {
    event.preventDefault();

    //VALIDO DNI
    let dni_correcto = false;
    if (campoDNI.value === "") {
      mostrarError("El dni no puede estar vacío");
    
    } else {
      //compruebo longitud
      if (campoDNI.value.length != 9) {
        mostrarError("El dni tiene que tener 9 carácteres");
      } else {
    
        //array numeros
        let numerosDNI = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        //array letras
        let letrasDNI = [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ];

        let correcto = true;
        for (let i = 0; i < 8 && correcto; i++) {
          if (!numerosDNI.includes(Number(campoDNI.value[i]))) {
            correcto = false;
          }
        }
        if (!letrasDNI.includes(campoDNI.value[8].toLowerCase())) {
          correcto = false;
        }
        if (!correcto) {
          alert("El dni está compuesto por ocho números y una letra");
        } else {
          dni_correcto = true;
        }
      }
    }

    if (!dni_correcto) {
      campoDNI.focus();
    } else {
      div.innerText="";
      
      
      //VALIDO NOMBRE
      let nombreCorrecto = false;

      if (campoNombre.value == "") {
        alert("El nombre no puede estar vacío");
      } else {
        let palabras = campoNombre.value.trim().split(" ");
        //cuando hago split por escpacio, si tengo mas de un espacio consecutivo me guarda una cadena vacia,
        //por tanto tengo que filtrar y eliminar esos vacíos.
        const palabras_ajustadas = palabras.filter(
          (elemento) => elemento !== ""
        );
        //console.log(palabras_ajustadas);
        if (palabras_ajustadas.length > 2) {
          alert("El nombre solo puede contener una o dos palabras");
        } else {
          nombreCorrecto = true;
        }
      }

      if (!nombreCorrecto) {
        campoNombre.focus();
      } else {
        //VALIDO APELLIDO
        let apellidoCorrecto = false;

        if (campoApellido.value == "") {
          alert("El apellido no puede estar vacío");
        } else {
          let palabras = campoApellido.value.trim().split(" ");
          //cuando hago split por escpacio, si tengo mas de un espacio consecutivo me guarda una cadena vacia,
          //por tanto tengo que filtrar y eliminar esos vacíos.
          const palabras_ajustadas = palabras.filter(
            (elemento) => elemento !== ""
          );
          //console.log(palabras_ajustadas);
          if (palabras_ajustadas.length > 2) {
            alert("El apellido solo puede contener una o dos palabras");
          } else {
            apellidoCorrecto = true;
          }
        }
        if (!apellidoCorrecto) {
          campoApellido.focus();
        } else {
          //VALIDO FECHA
          let fechaCorrecta = false;

          if (campoFecha == "") {
            alert("La fecha no puede estar vacía");
          } else {
            let dia = campoFecha.value.substring(0, 2);
            let mes = campoFecha.value.substring(3, 5);
            let ano = campoFecha.value.substring(6);

            if (
              isNaN(dia) ||
              isNaN(mes) ||
              isNaN(ano) ||
              dia <= 0 ||
              dia > 31 ||
              campoFecha.value[2] !== "/" ||
              mes <= 0 ||
              mes > 12 ||
              campoFecha.value[5] !== "/" ||
              ano < 1920 ||
              ano >= 2025
            ) {
              alert("Introduce el formato correcto");
            } else {
              fechaCorrecta = true;
            }
          }

          if (!fechaCorrecta) {
            campoFecha.focus();
          } else {
            //VALIDO WEB

            let webCorrecta = false;
            let protocolo = campoWeb.value.substring(0, 8);

            if (campoWeb.value == "") {
              alert("La dirección web no puede estar vacía");
            } else {
              if (protocolo != "https://") {
                alert("La dirección web debe empezar por https://");
              } else {
                webCorrecta = true;
              }
            }

            if (!webCorrecta) {
              campoWeb.focus();
            } else {
              //VALIDO CONTRASEÑA
              let contrasenaCorrecta = false;

              if (campoContrasena.value == "") {
                alert("La contraseña no puede estar vacía");
              } else {
                if (
                  campoContrasena.value.length < 8 ||
                  campoContrasena.value.length > 12
                ) {
                  alert("La contraseña debe estar entre 8 y 12 carácteres");
                } else {
                  contrasenaCorrecta = true;
                }
              }

              if (!contrasenaCorrecta) {
                campoContrasena.focus();
              } else {
                window.location.href = "ej11_2.html";
              }
            }
          }
        }
      }
    }
  });

  function mostrarError(mensaje) {
    div.innerText="";
    let texto = document.createTextNode(mensaje);
    div.setAttribute("class", "error"); 
    div.appendChild(texto);
    formu.appendChild(div); 
  }

 


};
