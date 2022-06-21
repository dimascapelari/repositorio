let valor1 = document.getElementById('valor1')
let valor2 = document.getElementById('valor2')
let resultado = document.getElementById('resultado')

function calcular() {

    let soma = 0;
    let X = Number(valor1.value)
    let Y = Number(valor2.value)

    if (X < Y) {
        for (i = X + 1; i < Y; i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
    } else {
        for (i = Y + 1; i < X; i++) {
            if (i % 2 != 0) {
                soma += i;
            }
        }
    }
    //console.log(soma)
    resultado.innerHTML = `SOMA DOS ÍMPARES = ${soma}`
}



/*
var valor = 0, pares = "", impares = "";
var valor2 = 0, pares = "", impares = "";
while (valor <= Number(valor1.value)) {
    // Concatena os números pares
    //pares += (valor % 2 == 0) ? valor + "," : "";
    pares += (valor % 2 == 0) ? valor + "<br>" : "";
    // Concatena os números impares
    impares += !(valor % 2 == 0) ? valor + "<br>" : "";
    valor++;
};
//Remove o último caracter, no caso, a virgula final
pares = pares.substr(0, (pares.length - 1));
impares = impares.substr(0, (impares.length - 1));

//console.log(pares);
//console.log(impares);

resultado.innerHTML = ` ${impares}`
console.log(valor)
console.log(valor2) */

