function conjugaVerbo() {

    // Variáveis ---------------------------------------
    var verbo = document.getElementById('verbo').value
    var radical = verbo.substr(0, verbo.length - 2)
    var pessoa = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles']
    var terminacao = ['o', 'as', 'a', 'amos', 'ais', 'am']
    var linhas = ''

    for (i = 0; i <= 5; i++) {
        linhas += pessoa[i] + ' ' + radical + terminacao[i] + '<br>'
    }

    document.getElementById('folha').innerHTML = linhas

}