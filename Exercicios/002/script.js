let base = document.getElementById('base')
let altura = document.getElementById('altura')
let area = document.getElementById('area')
let perimetro = document.getElementById('perimetro')
let diagonal = document.getElementById('diagonal')


function calcular() {

    let bas = Number(base.value)
    let alt = Number(altura.value)

    let multiplicar = bas * alt
    area.innerHTML = `ÁREA = ${multiplicar.toFixed(4)} `

    let perimet = (bas * 2) + (alt * 2)
    perimetro.innerHTML = `PERÍMETRO = ${perimet.toFixed(4)} `

    let diag = (bas * bas) + (alt * alt)
    //A função Math.sqrt() retorna a raiz quadrada de um número ( x )
    let raiz = Math.sqrt(diag)
    diagonal.innerHTML = `DIAGONAL = ${raiz.toFixed(4)} `

}
