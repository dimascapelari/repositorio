let dia = document.getElementById('dia')
let mes = document.getElementById('mes')
let signo = document.getElementById('signo')

function algoritmo() {
    //let dia, mes;
    dia = parseInt(document.form.dia.value);
    mes = parseInt(document.form.mes.value);
    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4))
        signo.innerHTML = 'Signo: Áries'
    if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10))
        signo.innerHTML = 'Signo: Libra'
    if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5))
        signo.innerHTML = 'Signo: Touro'
    if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11))
        signo.innerHTML = 'Signo: Escorpião'
    if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6))
        signo.innerHTML = 'Signo: Gêmeos'
    if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12))
        signo.innerHTML = 'Signo: Sagitário'
    if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7))
        signo.innerHTML = 'Signo: Câncer'
    if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1))
        signo.innerHTML = 'Signo: Capricórnio'
    if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8))
        signo.innerHTML = 'Signo: Leão'
    if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2))
        signo.innerHTML = 'Signo: Aquário'
    if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9))
        signo.innerHTML = 'Signo: Virgem'
    if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3))
        signo.innerHTML = 'Signo: Peixes'
}