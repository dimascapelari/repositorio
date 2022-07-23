
let sorteados = []

function sorteio() {
    return Math.floor(Math.random() * 60)
}

while (sorteados.length < 6) {

    let resultado = sorteio()

    if (sorteados.indexOf(resultado) === -1) {
        sorteados.push(resultado)
    }
    console.log(resultado)
}