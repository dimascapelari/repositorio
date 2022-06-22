let palavra = document.getElementById('palavra')
let saida = document.getElementById('saida')

function verificar() {
    const texto = palavra.value.toLowerCase()
    const reverso = texto.split('').reverse().join('')
    //console.log(`${explicacao} \n`);

    if (texto === reverso) {
        saida.innerHTML = `Saída: É palíndroma.`
    } else {
        saida.innerHTML = `Saída: Não é palíndroma.`
    }

}