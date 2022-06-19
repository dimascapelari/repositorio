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
        //alert('Insira os valores de a, b e c');
        x1.innerHTML = 'Insira os valores de A, B e C'
        x2.innerHTML = ''
    } else if (a == 0) {
        //alert('O valor de A deve ser diferente de 0');
        x1.innerHTML = 'O valor de A deve ser diferente de 0'
        x2.innerHTML = ''
    } else if (delta < 0) {
        //alert('Sem raízes reais');
        x1.innerHTML = 'Esta equação não possui raízes reais'
        x2.innerHTML = ''
    } else {
        x1.innerHTML = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(4)
        x2.innerHTML = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(4)
    }
}