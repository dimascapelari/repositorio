// ----- ReferenceError -----
// let x;

// try {
//     x = y + 1
// } catch (error) {
//     console.log(error)
//     console.log("name", error.name)
//     console.log("message", error.message)
// }


// ----- SyntaxError -----
// try {
//     eval("alert('hello)") // eval executa um código javascrip que for passado dentro dele
// } catch (error) {
//     console.log("name", error.name)
//     console.log("message", error.message)
// }


// ----- TypeError -----
// let num = 1
// try {
//     num.toUpperCase()
// } catch (error) {
//     console.log("name", error.name)
//     console.log("message", error.message)
// }



// ----- Mensagem de Erro Personalizada -----
function UserException(message) {
    this.message = message
    this.name = "UserException"
}

try {
    let numero = -6
    if (numero < 0) {
        throw new UserException("O número deve ser positivo")
    }
    console.log('ok')
} catch (error) {
    console.log("name", error.name) // UserException
    console.log("message", error.message) // O número deve ser positivo
}