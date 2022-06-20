let medida = document.getElementById('medida')
let classifica = document.getElementById('classifica')

function calcular() {
    let medir = Number(medida.value)

    if (medir <= 100) {
        classifica.innerHTML = 'Classificação: Normal'

    } else if (medir > 100 && medir <= 140) {
        classifica.innerHTML = 'Classificação: Elevado'

    } else if (medir > 140) {
        classifica.innerHTML = 'Classificação: Diabetes'
    }

}