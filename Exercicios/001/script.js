let largura = document.getElementById('largura')
let comprimento = document.getElementById('comprimento')
let pTamanho = document.getElementById('tamanho')
let valor = document.getElementById('valor')
let pPreco = document.getElementById('preco')

function calcMetragem() {

    let multiplicar = Number(largura.value).toFixed(1) * Number(comprimento.value).toFixed(1)
    pTamanho.innerHTML = ` ${multiplicar.toFixed(2)}m `
    resultado1 = multiplicar
    return resultado1

}

function calcValor() {

    valorQuadrado = resultado1 * valor.value
    pPreco.innerHTML = `Preço do Terreno: ${valorQuadrado.toFixed(2)}`
}
