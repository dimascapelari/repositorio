let valor = document.getElementById('valor')
let recebidos = document.getElementById('recebidos')
let ordenados = document.getElementById('ordenados')

let entrada = []

function ordenar() {

    let val = Number(valor.value)
    entrada.push(val)
    recebidos.innerHTML = `Números recebidos: ${entrada}`
    ordenados.innerHTML = `Ordenados: ${entrada.sort()}`
    valor.value = ' '
}