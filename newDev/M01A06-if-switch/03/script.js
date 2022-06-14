function cardapio(ds) {

    var mistura;

    switch (ds) {
        case 'segunda':
            mistura = 'Bife à Milanesa'
            break;
        case 'terça':
            mistura = 'Frango Grelhado'
            break
        case 'quarta':
            mistura = 'Lasanha'
            break
        case 'quinta':
            mistura = 'Filé de Pescada'
            break
        case 'sexta':
            mistura = 'Almondegas'
            break
        case 'sábado':
            mistura = 'Filé à Parmegiana'
            break
        case 'domingo':
            mistura = 'Frango Assado'
            break
        default:
            mistura = 'Dia da Semana não informado'
            break;
    }

    return mistura
}

console.log(cardapio())
console.log(cardapio('segunda'))
console.log(cardapio('terça'))
console.log(cardapio('quarta'))
console.log(cardapio('quinta'))
console.log(cardapio('sexta'))
console.log(cardapio('sábado'))
console.log(cardapio('domingo'))