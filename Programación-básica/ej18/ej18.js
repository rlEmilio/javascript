function pedirMesas() {
  let numeroMesas = parseInt(prompt("Dame el número de mesas")); //pido numero mesas, quizas lo controle luego

  let mesas = []; //array donde guardo "mesas", osea numeros aleatorios entre 0 y 4 inclusive.
  for (let i = 0; i < numeroMesas; i++) {
    let aleatorio = Math.floor(Math.random() * 5);
    mesas.push(aleatorio);
  }

  console.log(
    "El usuario ha metido un valor de " +
      numeroMesas +
      "\nEstado de las mesas: " +
      mesas
  );

  let comensales = 0;
  let terminar = true;
  do {
    terminar = true; //si metemos un numero negativo terminar se mantiene true y salimos del bucle;

    comensales = parseInt(prompt("Dime el número de comensales")); //pido comensales
    if (comensales == 0 || comensales > 4) {
      console.log(
        "Lo siento, no admitimos grupos vacíos o mayores a 4, intente de nuevo"
      );
      terminar = false;
    } else if (comensales > 0 && comensales <= 4) {
      terminar = false;

      //aqui voy a hacer la logica para asignar mesas.
      let i = 0;
      let asignado = false;
      let libres = false;

      while (i < mesas.length && !asignado) {
        libres = false;
        for (let i = 0; i < mesas.length; i++) { //compruebo si quedan mesas libres
            if (mesas[i] == 0) {
              libres = true;
            }
          }

        if (mesas[i] == 0) {
          mesas[i] = comensales;
          asignado = true;
          console.log(
            "Por favor, siéntese en la mesa " +
              (i + 1) +
              "\nEstado de las mesas: " +
              mesas
          );
        } else if (!(comensales + mesas[i] > 4) && !libres) {
            //si la suma de comensales y mesa[i] no excede de 4 nos sentamos en esa mesa
            mesas[i] += comensales;
            asignado = true;
            console.log(
              "Por favor, siéntese en la mesa " +
                (i + 1) +
                "\nEstado de las mesas: " +
                mesas
            );
          }

      

       

        i++;
      }

      if (!asignado) {
        console.log("No quedan mesas disponibles");
      }
    }
  } while (!terminar || isNaN(comensales));
}
pedirMesas();
