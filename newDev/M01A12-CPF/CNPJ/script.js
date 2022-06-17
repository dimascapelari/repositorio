
//var cnpj = 21974691000102 // 14
//cnpj = String(cnpj)
//console.log(cnpj[10])

function validarCNPJ() {

    // Receber o CNPJ informado
    var cnpj = String(document.getElementById('cnpj').value)
    var cnpjDV1 = cnpj[12]
    var cnpjDV2 = cnpj[13]

    // Armazena soma dos DV
    var soma = 0

    // Laço que calcula o primeiro DV
    for (i = 0; i <= 11; i++) {
        soma += cnpj[i] * (13 - i)
    }

    // Cálculo do primeiro DV
    var calcDV1 = 11 - (soma % 11)

    // Zerando a soma para iniciar o próximo passo
    soma = 0

    // Laço que calcula o segundo DV
    for (i = 0; i <= 12; i++) {
        soma += cnpj[i] * (14 - i)
    }

    // Cálculo do segundo DV
    var calcDV2 = 11 - (soma % 11)

    // Verificação se os DV calculados são iguais aos DV digitados
    if (cnpjDV1 == calcDV1 && cnpjDV2 == calcDV2) {
        alert('CNPJ é válido.')
    } else {
        alert('CNPJ é inválido.')
    }
}