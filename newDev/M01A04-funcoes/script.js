function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(14, 8))

//-----------------------------------------

function NomeCompleto(nome, sobrenome) {
    var nc = nome + ' ' + sobrenome
    return nc
}

console.log(NomeCompleto('Dimas', 'Capelari'))
//console.log(nc)//Só pode ser lida dentro da função

//-----------------------------------------

var cliente = NomeCompleto('João', 'Santos')
console.log(cliente)

//-----------------------------------------

function somar(n1, n2, n3, n4) {
    return n1 + n2 + n3 + n4
}
console.log(somar(7, 6, 5, 7))

function media(n1, n2, n3, n4) {
    return somar(n1, n2, n3, n4) / 4
}
console.log(media(7, 6, 5, 7))