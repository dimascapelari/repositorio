function conjugaVerbo() {

    // Variáveis ---------------------------------------
    var verbo = document.getElementById('verbo').value //casar - comer
    var radical = verbo.substr(0, verbo.length - 2) //cas - com
    var radicalFut = verbo.substr(0, verbo.length) //cas - com
    var conjugacao = verbo.substr(verbo.length - 2) //ar - er
    var conjugacao2 = verbo.substr(verbo.length - 2) //ar - er
    var conjugacao3 = verbo.substr(verbo.length - 2) //ar - er

    var pessoa = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles']

    // Presente ------------------------------------------------
    switch (conjugacao) {

        case 'ar':
            var terminacao = ['o', 'as', 'a', 'amos', 'ais', 'am']
            break;
        case 'er':
            var terminacao = ['o', 'es', 'e', 'emos', 'eis', 'em']
            break;
        case 'ir':
            var terminacao = ['o', 'es', 'e', 'imos', 'is', 'em']
            break;
        default:
            conjugacao = 0
    }

    var linhas = ''

    if (conjugacao != 0) {
        for (i = 0; i <= 5; i++) {
            linhas += 'No presente' + ' ' + pessoa[i] + ' ' + radical + terminacao[i] + '<br>'
        }
    } else {
        linhas = 'Não é um verbo válido'
    }

    // Futuro ------------------------------------------------
    switch (conjugacao2) {

        case 'ar':
            var terminacao2 = ['ei', 'ás', 'á', 'emos', 'eis', 'ão']
            break;
        case 'er':
            var terminacao2 = ['ei', 'ás', 'á', 'emos', 'eis', 'ão']
            break;
        case 'ir':
            var terminacao2 = ['ei', 'ás', 'á', 'emos', 'eis', 'ão']
            break;
        default:
            conjugacao2 = 0
    }

    var linhas2 = ''

    if (conjugacao2 != 0) {
        for (i = 0; i <= 5; i++) {
            linhas2 += 'No futuro' + ' ' + pessoa[i] + ' ' + radicalFut + terminacao2[i] + '<br>'
        }
    } else {
        linhas2 = 'Não é um verbo válido'
    }

    // Passado ------------------------------------------------
    switch (conjugacao3) {

        case 'ar':
            var terminacao = ['ei', 'aste', 'ou', 'amos', 'astes', 'aram']
            break;
        case 'er':
            var terminacao = ['i', 'este', 'eu', 'emos', 'estes', 'eram']
            break;
        case 'ir':
            var terminacao = ['i', 'iste', 'iu', 'imos', 'istes', 'iram']
            break;
        default:
            conjugacao3 = 0
    }

    var linhas3 = ''

    if (conjugacao3 != 0) {
        for (i = 0; i <= 5; i++) {
            linhas3 += 'No passado' + ' ' + pessoa[i] + ' ' + radical + terminacao[i] + '<br>'
        }
    } else {
        linhas3 = 'Não é um verbo válido'
    }


    document.getElementById('folha').innerHTML = linhas
    document.getElementById('folha2').innerHTML = linhas2
    document.getElementById('folha3').innerHTML = linhas3

}