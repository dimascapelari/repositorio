let duracaoA = document.getElementById('duracaoA')
let duracaoB = document.getElementById('duracaoB')
let duracaoC = document.getElementById('duracaoC')

let resultadoA = document.getElementById('resultadoA')
let resultadoB = document.getElementById('resultadoB')
let resultadoC = document.getElementById('resultadoC')


function converter() {
    // Resultado A ------------------------------------------
    horas = Math.floor(Number(duracaoA.value) / 3600);
    minutos = Math.floor((Number(duracaoA.value) - (horas * 3600)) / 60);
    segundos = Number(duracaoA.value) - (horas * 3600) - (minutos * 60);

    tempoResulA = horas.toString().padStart(2, '0') + ':' +
        minutos.toString().padStart(2, '0') + ':' +
        segundos.toString().padStart(2, '0');

    resultadoA.innerHTML = tempoResulA


    // Resultado B ------------------------------------------
    horas = Math.floor(Number(duracaoB.value) / 3600);
    minutos = Math.floor((Number(duracaoB.value) - (horas * 3600)) / 60);
    segundos = Number(duracaoB.value) - (horas * 3600) - (minutos * 60);

    tempoResulB = horas.toString().padStart(2, '0') + ':' +
        minutos.toString().padStart(2, '0') + ':' +
        segundos.toString().padStart(2, '0');

    resultadoB.innerHTML = tempoResulB


    // Resultado C ------------------------------------------
    horas = Math.floor(Number(duracaoC.value) / 3600);
    minutos = Math.floor((Number(duracaoC.value) - (horas * 3600)) / 60);
    segundos = Number(duracaoC.value) - (horas * 3600) - (minutos * 60);

    tempoResulC = horas.toString().padStart(2, '0') + ':' +
        minutos.toString().padStart(2, '0') + ':' +
        segundos.toString().padStart(2, '0');

    resultadoC.innerHTML = tempoResulC

}