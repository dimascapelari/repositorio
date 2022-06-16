
//var cpf = 11122233396
//cpf = String(cpf)
//console.log(cpf[10])

function validarCPF() {

    // Receber o CPF informado
    var cpf = String(document.getElementById('cpf').value)
    var cpfDV1 = cpf[9]
    var cpfDV2 = cpf[10]

    // Armazena soma dos DV
    var soma = 0

    // Laço que calcula o primeiro DV
    for (i = 0; i <= 8; i++) {
        soma += cpf[i] * (10 - i)
    }

    // Cálculo do primeiro DV
    var calcDV1 = 11 - (soma % 11)

    // Zerando a soma para iniciar o próximo passo
    soma = 0

    // Laço que calcula o segundo DV
    for (i = 0; i <= 9; i++) {
        soma += cpf[i] * (11 - i)
    }

    // Cálculo do segundo DV
    var calcDV2 = 11 - (soma % 11)

    // Verificação se os DV calculados são iguais aos DV digitados
    if (cpfDV1 == calcDV1 && cpfDV2 == calcDV2) {
        alert('CPF é válido.')
    } else {
        alert('CPF é inválido.')
    }
}