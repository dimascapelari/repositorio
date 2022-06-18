let primeiro = document.getElementById('primeiro')
let segundo = document.getElementById('segundo')
let terceiro = document.getElementById('terceiro')
let menor = document.getElementById('menor')

function comparar() {

    if (Number(primeiro.value) < Number(segundo.value) && Number(primeiro.value) < Number(terceiro.value)) {
        menor.innerHTML = `MENOR = ${Number(primeiro.value)}`
    } else if (Number(segundo.value) < Number(primeiro.value) && Number(segundo.value) < Number(terceiro.value)) {
        menor.innerHTML = `MENOR = ${Number(segundo.value)}`
    } else if (Number(terceiro.value) < Number(primeiro.value) && Number(terceiro.value) < Number(segundo.value)) {
        menor.innerHTML = `MENOR = ${Number(terceiro.value)}`
    } else {
        menor.innerHTML = `MENOR = EMPATE!`
    }

}