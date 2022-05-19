/* Sistema de Caixa Familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo
array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguindo o valor do saldo*/

let family = {
    renda: [2500, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00, 500]
}

function soma(array) {
    let total = 0

    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculaRenda = soma(family.renda)
    const calculaDespesas = soma(family.despesas)

    const total = calculaRenda - calculaDespesas

    const itsOK = total >= 0

    let balanceText = 'negativo'

    if (itsOK) {
        balanceText = 'positivo'
    }

    console.log(`Seu ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()