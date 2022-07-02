
// ----- Somar todos os itens do Array -----
// let numeros = [1, 2, 3, 4]
// let total = numeros.reduce(function (valorAcumulado, valorAtual) {
//     return valorAcumulado + valorAtual
// }, 0)

// console.log("total", total)


// ----- Retornar o maior valor de um Array -----
// let numeros = [20, 35, 30]
// let maiorValorFinal = numeros.reduce(function (maiorValor, item) {
//     return Math.max(maiorValor, item)
// }, 0)

// console.log("maiorValorFinal", maiorValorFinal)


// ----- Somar valor total em estoque -----
let valoresDosProdutos = [100.00, 200.00, 25.00]

function calculaValorTotalEmEstoque(total, valorProduto) {
    return total + valorProduto
}

let totalEmEstoque = valoresDosProdutos.reduce(calculaValorTotalEmEstoque, 0)
console.log("totalEmEstoque", totalEmEstoque)