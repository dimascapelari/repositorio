let distancia = document.getElementById('distancia')
let gasto = document.getElementById('gasto')
let media = document.getElementById('media')


function calcular() {
    let calcula = Number(distancia.value) / Number(gasto.value)
    media.innerHTML = `Consumo médio = ${calcula.toFixed(3)}`
}