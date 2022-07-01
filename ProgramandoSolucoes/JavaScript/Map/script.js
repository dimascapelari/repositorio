// let frutas = ['Laranja', 'Maçã', 'Pera']
// let novoArray = frutas.map((valorAtual, indice, array) => {
//     console.log(valorAtual, indice, array)
//     return valorAtual
// })


// let numeros = [1, 3, 5]
// let numerosCalculados = numeros.map((valorAtual, indice, array) => {
//     return valorAtual * 3
// })
// console.log('numeros =', numeros)
// console.log('numerosCalculados =', numerosCalculados)


// let carros = [
//     {
//         nome: 'Ferrari',
//         valor: 100
//     },
//     {
//         nome: 'Gol',
//         valor: 200
//     },
// ]
// let nomeCarros = carros.map((valorAtual, indice, array) => {
//     console.log(valorAtual, indice, array)
//     console.log(valorAtual.nome, indice, array)
//     return valorAtual
// })


// Exemplo prático: separar dados de pessoas

let pessoas = [
    {
        id: 1,
        nome: 'Joaquim',
        idade: 25,
        país: 'Brasil',
        estado: 'RS',
        cpf: '123456789'
    },
    {
        id: 2,
        nome: 'Renato',
        idade: 30,
        país: 'Brasil',
        estado: 'BA',
        cpf: '987654321'
    },
]
let pessoasSimplificado = pessoas.map((valorAtual, indice, array) => {
    let pessoa = {}
    pessoa.nome = valorAtual.nome
    pessoa.idade = valorAtual.idade
    return pessoa
})

console.log('pessoasSimplificado =', pessoasSimplificado)
console.log('pessoas =', pessoas)