let preco = document.getElementById('preco')
let quantidade = document.getElementById('quantidade')
let dinheiro = document.getElementById('dinheiro')
let troco = document.getElementById('troco')

function calcular() {
    let calcQuantidade = Number(preco.value) * Number(quantidade.value)
    let valor = Number(dinheiro.value) - calcQuantidade

    if (valor >= 0) {
        troco.innerHTML = 'Troco =' + ' ' + valor.toFixed(2)
    } else {
        troco.innerHTML = 'Troco = CONFIRA O VALOR !!!'
    }
}