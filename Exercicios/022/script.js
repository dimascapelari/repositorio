let inicial = document.getElementById('inicial')
let resultado = document.getElementById('resultado')

function calcular() {
    let n = Number(inicial.value)
    let i

    resultado.innerHTML = 'Tabuada do ' + n + '<br><br>'

    for (i = 1; i <= 10; i++) {
        resultado.innerHTML += n + ' ' + 'x' + ' ' + i + ' ' + '=' + ' ' + (n * i) + '<br>'
    }
}
