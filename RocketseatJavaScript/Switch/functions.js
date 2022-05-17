// switch

/*let expression = ''

switch (expression) {
    case 'a':
        // codigo
        console.log('a')
        break
    case 'b':
        // codigo para expression b
        console.log('b')
        break
    default:
        console.log('default')
        break
}*/

function calculate(number1, operador, number2) {
    let result = 0

    switch (operador) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
    }

    return result
}

console.log(calculate(4, '*', 8))