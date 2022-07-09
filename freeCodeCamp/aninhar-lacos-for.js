function multiplyAll(arr) {
  let product = 1;
  // Altere apenas o código abaixo desta linha

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }

console.log(product)

  // Altere apenas o código acima desta linha
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
