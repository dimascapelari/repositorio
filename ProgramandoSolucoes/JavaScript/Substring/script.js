// ----- Obter parte da String -----
// let mensagem = "Eu trabalho com JavaScript"
// let palavra = mensagem.substring(16)
// console.log('palavra:', palavra)


// ----- Obter parte da String passando o indice inicial e final -----
// let mensagem = "Eu trabalho com JavaScript, VueJS e PHP"
// let palavra = mensagem.substring(16, 26)
// console.log('palavra:', palavra)



// ----- Diferença entre SUBSTRING e SUBSTR -----
// let mensagem = "Eu trabalho com JavaScript, VueJS e PHP"
// let palavra = mensagem.substr(16, 10)
// console.log('palavra:', palavra)



// ----- Exemplo prático -----
let mensagem = "pedido realizado com #sucesso"
let indexStart = mensagem.indexOf('#')
let palavra = mensagem.substring(indexStart + 1)

console.log('indexStart:', indexStart)
console.log('palavra:', palavra)
