function comparaNumeros(num1, num2) {
  const saoIguais = num1 === num2;
  const soma = num1 + num2;

  /*  if (saoIguais) {
      return "São iguais";
    }
    return "Não são iguais"; */

  return saoIguais ? "São iguais" : "não são iguais";
}