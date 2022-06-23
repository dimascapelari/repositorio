let palavra = document.getElementById('palavra')
let vogais = document.getElementById('vogais')
let consoantes = document.getElementById('consoantes')

function calcular() {

    function vowel_count(str1) {
        var vowel_list = 'aeiouAEIOU';
        var vcount = 0;

        for (var x = 0; x < str1.length; x++) {
            if (vowel_list.indexOf(str1[x]) !== -1) {
                vcount += 1;
            }

        }
        return vcount;
    }

    let vog = vowel_count(palavra.value)
    let sobraConsoantes = (palavra.value.length - vog)

    vogais.innerHTML = `Vogais: ${vog}`
    consoantes.innerHTML = `Consoantes: ${sobraConsoantes}`

}