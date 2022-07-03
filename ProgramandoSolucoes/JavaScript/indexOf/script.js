
// Procurar inteiro em array
let numeros = [5, 10, 15]
console.log(numeros.indexOf(10))


// Procurar string dentro de um array
let frutas = ["Pera", "Laranja", "Maçã"]
console.log(frutas.indexOf("Laranja"))


// Procurando uma string dentro de outra
let texto = "um texto para teste"
console.log(texto.indexOf("para"))


// Utilizando o segundo parâmetro
let texto2 = "um texto para teste, vamos ver se o teste da certo"
console.log(texto2.indexOf("teste", 15))


let filtro = "Ve"
let cores = ["Vermelho", "Verde", "Azul", "Amarelo"]
let coresFiltrado = cores.filter((cor) => {
    if (cor.indexOf(filtro) !== -1) {
        return cor
    }
})
console.log(coresFiltrado)