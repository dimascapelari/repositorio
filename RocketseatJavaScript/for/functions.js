// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento


for (let i = 0; i < 10; i++) {
    console.log(i)
}

for (let d = 10; d > 0; d--) {
    console.log(d)
}

for (let b = 100; b > 0; b--) {
    if (b === 50) {
        break;
    }

    console.log(b)
}


for (let x = 10; x > 0; x--) {
    if (x === 5) {
        continue;
    }

    console.log(x)
}