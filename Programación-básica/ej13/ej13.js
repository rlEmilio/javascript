function mostrarSiglo() {
  let siglo = 0;
  let ano = Number(prompt("Dame un año"));
  if (ano % 100 == 0) {
    siglo = ano / 100;
  } else {
    siglo = Math.floor(ano / 100 + 1);
  }

  alert("El siglo correspondiente es: " + siglo);
}
