let quantidade = document.getElementById('quantidade')
let valor = document.getElementById('valor')

function calcular() {

    let minuto = 2

    if (Number(quantidade.value) <= 100) {
        valor.innerHTML = 'Valor a pagar: R$ 50.00'
    } else if (Number(quantidade.value) > 100) {
        valor.innerHTML = `Valor a pagar: R$ ${(Number(quantidade.value) * minuto - 150).toFixed(2)}`
    }

}