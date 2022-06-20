let dis1 = document.getElementById('dis1')
let dis2 = document.getElementById('dis2')
let dis3 = document.getElementById('dis3')
let maior = document.getElementById('maior')


function verificar() {
    let maiorDist1 = Number(dis1.value)
    let maiorDist2 = Number(dis2.value)
    let maiorDist3 = Number(dis3.value)

    if (maiorDist1 > maiorDist2 && maiorDist1 > maiorDist3) {
        maior.innerHTML = `MAIOR DISTÂNCIA = ${maiorDist1}`

    } else if (maiorDist2 > maiorDist1 && maiorDist2 > maiorDist3) {
        maior.innerHTML = `MAIOR DISTÂNCIA = ${maiorDist2}`

    } else if (maiorDist3 > maiorDist1 && maiorDist3 > maiorDist2) {
        maior.innerHTML = `MAIOR DISTÂNCIA = ${maiorDist3}`
    }

}