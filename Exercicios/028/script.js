let valor = document.getElementById('valor')
let valores = document.getElementById('valores')
let saida = document.getElementById('saida')

let entrada = []

function ordenar() {

    let val = Number(valor.value)
    entrada.push(val)
    let max = Math.max(...entrada)
    let min = Math.min(...entrada)
    valores.innerHTML = `Valores: ${entrada}`
    //saida.innerHTML = `Saída: ${entrada.sort()}`
    saida.innerHTML = `Saída: ${min} e ${max}`
    valor.value = ' '
}
