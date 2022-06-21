let inicial = document.getElementById('inicial')
let resultado = document.getElementById('resultado')


function calcular() {

    var valor = 1, pares = "", impares = "";
    while (valor <= Number(inicial.value)) {
        // Concatena os números pares
        //pares += (valor % 2 == 0) ? valor + "," : "";
        pares += (valor % 2 == 0) ? valor + "<br>" : "";
        // Concatena os números impares
        // impares += !(valor % 2 == 0) ? valor + "," : "";
        valor++;
    };
    //Remove o último caracter, no caso, a virgula final
    pares = pares.substr(0, (pares.length - 1));
    // impares = impares.substr(0, (impares.length - 1));

    // console.log(pares);
    // console.log(impares);

    resultado.innerHTML = ` ${pares}`

}
