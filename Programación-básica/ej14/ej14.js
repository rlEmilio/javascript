let colores = [
  "red",
  "yellow",
  "green",
  "aliceblue", //le pongo este color porque el blanco no se ve
  "blue",
  "brown",
  "pink",
  "black",
];

let franjas = 0;

do {
  franjas = prompt("Dame el número de franjas de la bandera, de 1 a 5");
} while (franjas < 1 || franjas > 5);

//paso 2 -> A Se pueden repetir colores consecutivos
let aleatorios = [];
for (let i = 0; i < 5; i++) {
  let random = parseInt(Math.random() * (colores.length - 1));
  aleatorios.push(colores[random]);
}
console.log(aleatorios);

//paso 2 -> B No se pueden repetir colores
// let aleatorios = [];
// for (let i = 0; i < 5; i++) {
//   let random = parseInt(Math.random() * (colores.length));
// if(!aleatorios.includes(colores[random])){  //si el array aleatorio no incluye el color se añade, si no se da otra vuelta
//     aleatorios.push(colores[random]);

// }else{
//     i--;
// }
// }

//paso 2 -> C Se pueden repetir colores mientras no sean consecutivos
// let aleatorios = [];
// for (let i = 0; i < 5; i++) {
//   let random = parseInt(Math.random() * (colores.length));
//   if(colores[random]!=aleatorios[i-1]){   //si el color random es distinto que el de la anterior posición se añade, si no se da otra vuelta
//     aleatorios.push(colores[random]);
//   }else{
//     i--;
//   }
// }

document.write('<table style="width: 300px; height: 200px; border-collapse:collapse "> <tr>');

for (let i = 0; i < franjas; i++) {
  document.write(
    '<td style="height: 200px ;  background-color:' + aleatorios[i] + '"></td>'
  );
}

document.write("</tr> </table>");
