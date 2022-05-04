let btnEnviarSuma = document.getElementById("btnenviarSuma");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

btnEnviarSuma.addEventListener("click", () => {
  let primerNumero: number = Number(dato1.value);
  let segundoNumero: number = Number(dato2.value);
  let resultado: number = primerNumero + segundoNumero;
  console.log("El primer número es:", primerNumero);
  console.log("El segundo número es:", segundoNumero);
  console.log("El resultado de la suma es", resultado);
});
