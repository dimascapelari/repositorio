//Agora outro exemplo, filtro de pares e ímpares:

var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];
var pares = function (item) {
    return !(item % 2);
}
var impares = function (item) {
    return item % 2;
}
var numerosPar = numeros.filter(pares);
var numerosImpar = numeros.filter(impares);
console.log(numerosPar);
// → [10, 18, 2, 12, 100]
console.log(numerosImpar);
// → [1, 15, 21, 33]