let primeira = document.getElementById('primeira')
let segunda = document.getElementById('segunda')
let resultado = document.getElementById('resultado')
let aprovacao = document.getElementById('aprovacao')

function media() {
    let fazerMedia = Number(primeira.value) + Number(segunda.value)
    resultado.innerHTML = `NOTA FINAL = ${fazerMedia} `

    if (fazerMedia <= 59.9) {
        aprovacao.innerHTML = 'REPROVADO'
    } else if (fazerMedia >= 60) {
        aprovacao.innerHTML = 'APROVADO'
    }
}