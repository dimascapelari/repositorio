let entrada = document.getElementById('entrada')
let saida = document.getElementById('saida')

function validarcnpj() {

    function validar(cnpj) {
        var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        var c = (entrada.value).replace(/[^\d]/g, '')

        console.log(c)

        if (c.length !== 14)
            return false

        if (/0{14}/.test(c))
            return false

        for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
        if (c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
            return false

        for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
        if (c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
            return false

        return true

    }

    if (validar() == true) {
        saida.innerHTML = 'Saída: Válido.'
    } else {
        saida.innerHTML = 'Saída: Inválido.'
    }

}


// Válido: 97544324000122   97.544.324/0001-22
// Inválido: 70345111000109   70.345.111/0001-09