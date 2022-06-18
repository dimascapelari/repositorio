let base = document.getElementById('base')
let altura = document.getElementById('altura')
let area = document.getElementById('area')
let perimetro = document.getElementById('perimetro')
let diagonal = document.getElementById('diagonal')


function calcular() {

    let multiplicar = Number(base.value).toFixed(1) * Number(altura.value).toFixed(1)
    area.innerHTML = `Área = ${multiplicar.toFixed(4)} `

    let perimet = (Number(base.value) * 2) + (Number(altura.value) * 2)
    perimetro.innerHTML = `Perímetro = ${perimet.toFixed(4)} `

    let diag = (Number(base.value) * Number(base.value)) + (Number(altura.value) * Number(altura.value))
    let raiz = Math.sqrt(diag)
    diagonal.innerHTML = `Diagonal = ${raiz.toFixed(4)} `

}