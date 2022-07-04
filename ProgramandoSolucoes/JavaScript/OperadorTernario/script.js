
// Condição Convencional
// let idade = 19
// if (idade >= 18) {
//     console.log(true)
// } else {
//     console.log(false)
// }


// Operador Ternário
// let idade = 19
// let podeDirigir = (idade >= 18) ? true : false
// console.log(podeDirigir)


// Operador Ternário retornar string
// let testeCovid = false
// let resultadoTeste = (testeCovid == true) ? "Positivo" : "Negativo"
// console.log(`O resultado do teste é ${resultadoTeste}`)


// Operador Ternário mais de uma condição
let tipoPedido = "entrega"
let statusPagamento = "pago"

let situacaoEntrega =
    (tipoPedido == "entrega" && statusPagamento == "pago")
        ? "Entrega liberada"
        : "Entrega não liberada"
console.log(situacaoEntrega)