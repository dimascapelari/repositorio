var minhaLista = [
    'Abacaxi',
    'Banana',
    'Limão',
    'Melão'
]

function exibirLista(arr) {

    var textoRetorno = ''

    for (i = 0; i <= arr.length - 1; i++) {

        textoRetorno += i + " - " + arr[i] + '<br>'
    }
    document.getElementById('lista').innerHTML = textoRetorno
}

exibirLista(minhaLista)