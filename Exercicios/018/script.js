let valor = document.getElementById('valor')
let verificacao = document.getElementById('verificacao')


function verificar() {

    let cf = prompt('Você vai digitar a temperatura em qual escala (C/F)?')
    let resultado

    if (cf == 'c' || cf == 'C') {
        c = prompt('Digite a temperatura em Celsius:')
        resultado = (c * 9 / 5) + 32
        valor.innerHTML = `Temperatura digitada em Celsius: ${c}`
        verificacao.innerHTML = `Temperatura equivalente em Fahrenheit: ${resultado.toFixed(2)}`


    } else if (cf == 'f' || cf == 'F') {
        f = prompt('Digite a temperatura em Fahrenheit:')
        resultado = (f - 32) * 5 / 9
        valor.innerHTML = `Temperatura digitada em Fahrenheit: ${f}`
        verificacao.innerHTML = `Temperatura equivalente em Celsius: ${resultado.toFixed(2)}`

    } else {
        alert('Difite C ou F')
    }

}
