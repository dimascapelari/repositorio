function nextInLine(arr, item) {
  // Altere apenas o código abaixo desta linha

  arr.push(item);
  const removed = arr.shift();

  return removed
  return item;
  // Altere apenas o código acima desta linha
}

// Configuração
const testArr = [1, 2, 3, 4, 5];

// Exibir o código
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));