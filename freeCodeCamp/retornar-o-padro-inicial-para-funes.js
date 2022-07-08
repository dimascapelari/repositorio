// Configuração
function abTest(a, b) {
  // Altere apenas o código abaixo desta linha

  if (a < 0 || b < 0) {
    return undefined;
  }

  // Altere apenas o código acima desta linha

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);