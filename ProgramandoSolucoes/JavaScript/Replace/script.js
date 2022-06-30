// Primeiro exemplo

// let texto = 'eu amo JavaScript'
// let textoAtualizado = texto.replace('JavaScript', 'PHP')
// console.log(textoAtualizado)





// Exemplo com Regex

// let texto = 'eu amo o JavaScript, o JavaScript é uma excelente linguagem de programação'
// console.log(texto)
// let textoAtualizado = texto.replace(/JavaScript/g, 'PHP')
// console.log(textoAtualizado)





// Exemplo Regex case sensitive

// let texto = 'eu amo o JAVAscrIPT, o Javascript é uma excelente linguagem de programação'
// console.log(texto)
// let textoAtualizado = texto.replace(/JavaScript/gi, 'PHP')
// console.log(textoAtualizado)






// Exemplo com função

// let texto = 'JavaScript - eu amo o JavaScript, o JavaScript é uma excelente linguagem de programação e o JavaScript possibilita programar no frontend, backend e mobile.'
// console.log(texto)
// let textoAtualizado = texto.replace(/JavaScript/gi, (valor, index, original) => {

//     if (index !== 0) {
//         return "PHP"
//     } else {
//         return valor
//     }
// })
// console.log(textoAtualizado)



// Exemplo prático, retirando pontos e traço do CPF

let cpf = '123.456.789-09'
console.log(cpf)
/*
* o \D localiza tudo que não é número e o + na frente dele indica que se tiver
* mais de um caractere que não seja número e esteja em sequencia, remove junto
*/
let cpfLimpo = cpf.replace(/\D+/g, '')//.replace('-', '')
console.log(cpfLimpo)