let medidaA = document.getElementById('medidaA')
let medidaB = document.getElementById('medidaB')
let medidaC = document.getElementById('medidaC')

let quadrado = document.getElementById('quadrado')
let triangulo = document.getElementById('triangulo')
let trapezio = document.getElementById('trapezio')


function calcular() {
    let medA = Number(medidaA.value) * 4
    quadrado.innerHTML = `ÁREA DO QUADRADO = ${medA.toFixed(4)}`

    let medB = Number(medidaB.value) * 2
    triangulo.innerHTML = `ÁREA DO TRIÂNGULO = ${medB.toFixed(4)}`

    let medC = (Number(medidaA.value) + Number(medidaB.value)) * (Number(medidaC.value)) / 2
    trapezio.innerHTML = `ÁREA DO TRAPÉZIO = ${medC.toFixed(4)} `
}