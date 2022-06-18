let nome = document.getElementById('nome')
let valorHora = document.getElementById('valorHora')
let horasTrab = document.getElementById('horasTrab')
let pagamento = document.getElementById('pagamento')


function calcular() {
    let valor = (Number(valorHora.value)) * (Number(horasTrab.value))
    pagamento.innerHTML = `O pagamento para ${nome.value} deve ser ${valor.toFixed(2)}`
}