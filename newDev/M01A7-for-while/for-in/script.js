var pessoas = {
    nome: 'Dimas',
    idade: 39,
    altura: 1.68
}

console.log(pessoas)
// -------------------------------

for (x in pessoas) {
    console.log(x)
}

// -------------------------------

for (x in pessoas) {
    console.log(pessoas[x])
}

// -------------------------------

for (x in pessoas) {
    console.log(x + ' -> ' + pessoas[x])
}