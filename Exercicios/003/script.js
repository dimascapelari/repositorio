let nome1 = document.getElementById('nome1')
let idade1 = document.getElementById('idade1')
let nome2 = document.getElementById('nome2')
let idade2 = document.getElementById('idade2')
let pMedia = document.getElementById('pMedia')


function calcular() {
    let media = ((Number(idade1.value)) + (Number(idade2.value))) / 2
    pMedia.innerHTML = `A idade média de ${nome1.value} e ${nome2.value} é de ${media}`
}