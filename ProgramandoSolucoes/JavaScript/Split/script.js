// ----- Separar a string com o split -----
// let texto = "este é um texto para o teste"
// let resultado = texto.split(" ")
// console.log(resultado)


// ----- Parâmetro limite -----
// let texto = "este é um texto para o teste"
// let resultado = texto.split(" ", 3)
// console.log(resultado)


// ----- String com vírgulas -----
// let texto = "laranja, banana, pêra"
// let resultado = texto.split(", ")
// console.log(resultado)



// ----- Separar por cadeia de caracteres -----
// let texto = "este é um texto para o teste"
// let resultado = texto.split("um")
// console.log(resultado)


// ----- Reverter strings -----
// let texto = "palavra"
// let resultado = texto.split("").reverse().join("")
// console.log(resultado)


// ----- Contar a quantidade de ocorrencias de uma letra na string -----
let texto = "palavra utilizada para teste"
let resultado = texto.split("").filter(letra => letra.indexOf("a") != -1)
console.log(resultado.length)