let valor1 = document.getElementById('valor1')
let valor2 = document.getElementById('valor2')
let resultado = document.getElementById('resultado')

function calcular() {

    let soma = 0;
    let X = Number(valor1.value)
    let Y = Number(valor2.value)

    if (X < Y) {
        for (i = X + 1; i < Y; i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
    } else {
        for (i = Y + 1; i < X; i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
    }
    //console.log(soma)
    resultado.innerHTML = `SOMA DOS ÍMPARES = ${soma}`
}