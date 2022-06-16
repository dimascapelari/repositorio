// Variáveis -----------------------------------
var minhaLista = [
    'Abacaxi',
    'Banana',
    'Limão',
    'Melão'
]
// Funções -----------------------------------
function exibirLista(arr) {
    var textoRetorno = ''
    for (i = 0; i <= arr.length - 1; i++) {
        textoRetorno += i + " - " + arr[i] + '<br>'
    }
    document.getElementById('lista').innerHTML = textoRetorno
}

function inserirItem(arr) {
    var novoItem = prompt('Digite um novo item:')
    if (novoItem != null && novoItem != "") {
        arr.push(novoItem)
    } else {
        alert('Nenhum item foi digitado!')
    }

    exibirLista(arr)
}

function removerItem(arr) {
    var item = prompt('Digite o número do item a ser removido:')
    if (item != null && item != "") {
        arr.splice(item, 1)
    } else {
        alert('Nenhum item foi digitado!')
    }
    exibirLista(arr)
}


exibirLista(minhaLista)