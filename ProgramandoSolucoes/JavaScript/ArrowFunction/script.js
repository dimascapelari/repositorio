
// Função Padrão
let soma = function (a, b) {
    return a + b
}
console.log(soma(2, 2))


// Arrow Function
let soma2 = (a, b) => {
    return a + b
}
console.log(soma2(2, 5))


// Retorno Implícito
let soma3 = (a, b) => a + b
console.log(soma3(2, 3))


// Função com 1 parâmetro
let saudacao = nome => {
    return `Olá ${nome}`
}
console.log(saudacao("Dimas"))


// Função sem parâmetro
let saudacao2 = () => {
    return `Olá`
}
console.log(saudacao2())


// Utilizar em conjunto com o map()
let nomes = ['Dimas', 'Maria Luiza', 'Mariana']
nomes.map((nome) => {
    console.log(nome)
})