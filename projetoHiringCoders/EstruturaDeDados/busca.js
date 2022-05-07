var valores = [5, 8, 10, 22, 45, 38];

function busca(num) {
  for (i = 0; i < 6; i++) {
    if (num == valores[i]) {
      return i;
    }
  }
  return -1;
}

// usando a nossa ferramenta de busca
console.log(busca(8));
console.log(busca(50));
