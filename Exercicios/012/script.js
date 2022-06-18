let coeA = document.getElementById('coeA')
let coeB = document.getElementById('coeB')
let coeC = document.getElementById('coeC')
let x1 = document.getElementById('x1')
let x2 = document.getElementById('x2')

function bhaskara() {

    let a = coeA.value
    let b = coeB.value
    let c = coeC.value
    const delta = b * b - 4 * a * c


    if (!a || !b || !c) {
        alert('Insira os valores de a, b e c');
    } else if (a == 0) {
        alert('O valor de A deve ser diferente de 0');
    } else if (delta < 0) {
        alert('Sem raízes reais');
    } else {
        x1.innerHTML = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(4)
        x2.innerHTML = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(4)
    }
}