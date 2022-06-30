// --------- ForEach array simples --------- 

// let pessoas = ['João', 'Maria', 'José']
// pessoas.forEach((valorAtual, indice, arrayCompleto) => {
//     console.log(valorAtual, indice, arrayCompleto)
// })



// --------- ForEach array de objetos --------- 

// let produtos = [
//     {
//         nomeProduto: 'Celular',
//         valorProduto: 1200.00,
//         porcentagemDesconto: 0.20
//     },
//     {
//         nomeProduto: 'Notebook',
//         valorProduto: 2500.00,
//         porcentagemDesconto: 0.30
//     },
//     {
//         nomeProduto: 'Televisão',
//         valorProduto: 3500.00,
//         porcentagemDesconto: 0.35
//     }
// ]

// produtos.forEach((produtoAtual) => {
//     console.log(produtoAtual.nomeProduto, + '' + produtoAtual.valorProduto)
// })




// forEach exemplo prático
// calcular desconto do produto e colocar o desconto em cada produto

let produtos = [
    {
        nomeProduto: 'Celular',
        valorProduto: 1200.00,
        porcentagemDesconto: 0.20
    },
    {
        nomeProduto: 'Notebook',
        valorProduto: 2500.00,
        porcentagemDesconto: 0.30
    },
    {
        nomeProduto: 'Televisão',
        valorProduto: 3500.00,
        porcentagemDesconto: 0.35
    }
]
produtos.forEach((produtoAtual) => {
    let valorDoDesconto = produtoAtual.valorProduto * produtoAtual.porcentagemDesconto
    let valorTotal = produtoAtual.valorProduto - valorDoDesconto
    produtoAtual.valorTotalProduto = valorTotal
    console.log(produtoAtual)
    //console.log(valorDoDesconto)
})