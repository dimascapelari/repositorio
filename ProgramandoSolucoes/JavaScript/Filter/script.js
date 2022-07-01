// let numeros = [4, 12, 7, 15, 20, 3]
// let numerosFiltrados = numeros.filter((valorAtual) => {
//     if (valorAtual > 10) {
//         return valorAtual
//     }
// })
// console.log('original =', numeros)
// console.log('filtrados =', numerosFiltrados)



// let idades = [16, 19, 21, 17]
// function verificaMaiorQue18(idade) {
//     if (idade >= 18) {
//         return idade
//     }
// }

// let idadesMaioresQue18 = idades.filter(verificaMaiorQue18)
// console.log('idades', idades)
// console.log('idadesMaioresQue18',idadesMaioresQue18)


let pessoas = [
    {
        nome: 'João',
        telefone: null,
        idade: 20
    },
    {
        nome: 'Maria',
        telefone: '(11)22224444',
        idade: 21
    },
    {
        nome: 'Joaquim',
        telefone: null,
        idade: 22
    }
]

let pessoasSemTelefone = pessoas.filter((valorAtual) => {
    if (!valorAtual.telefone) {
        return valorAtual
    }
})
console.log('pessoas', pessoas)
console.log('pessoasSemTelefone', pessoasSemTelefone)