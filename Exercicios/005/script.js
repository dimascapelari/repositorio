let valor = document.getElementById('valor')
let area = document.getElementById('area')


function calcular() {

    let raio = Number(valor.value) * Number(valor.value)
    let resultado = raio * 3.14159
    area.innerHTML = 'Área =' + ' ' + resultado.toFixed(3)
}