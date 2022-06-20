let primeiro = document.getElementById('primeiro')
let segundo = document.getElementById('segundo')
let terceiro = document.getElementById('terceiro')
let menor = document.getElementById('menor')

function comparar() {
    let pri = Number(primeiro.value)
    let seg = Number(segundo.value)
    let ter = Number(terceiro.value)

    if (pri < seg && pri < ter) {
        menor.innerHTML = `MENOR = ${pri}`
    } else if (seg < pri && seg < ter) {
        menor.innerHTML = `MENOR = ${seg}`
    } else if (ter < pri && ter < seg) {
        menor.innerHTML = `MENOR = ${ter}`
    } else {
        menor.innerHTML = `MENOR = EMPATE!`
    }
}
