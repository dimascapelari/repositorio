let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let verificacao = document.getElementById('verificacao')


function verificar() {

    let numero1 = Number(num1.value)
    let numero2 = Number(num2.value)
    let maior
    let menor

    // Verifica qual número é o maior
    if (numero1 > numero2) {
        maior = numero1
        menor = numero2
    } else if (numero1 < numero2) {
        maior = numero2
        menor = numero1
    }

    // Verifica se o maior é múltiplo do menor
    if (maior % menor == 0) {
        verificacao.innerHTML = 'São múltiplos.'
    } else {
        verificacao.innerHTML = 'Não são múltiplos.'
    }
}
