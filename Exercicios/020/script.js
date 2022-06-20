let inicial = document.getElementById('inicial')
let final = document.getElementById('final')
let resultado = document.getElementById('resultado')


function calcular() {

    let i
    let soma = 0

    for (i = Number(inicial.value); i <= Number(final.value); i++) {
        soma += i
        resultado.innerHTML = `Resultado: ${soma}`
    }
    return Number(soma.value)
}
