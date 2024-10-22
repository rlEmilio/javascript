function filtrarNombres(lista){
    let filtrado = lista.filter(nombre => nombre.length === 4);
       
    console.log(filtrado);
    }

    filtrarNombres(["Luis","Estela","Angel","Enya","Jose Antonio"]);
