
// ----- For ----- loop padrão

// for (let contador = 0; contador < 10; contador++) {
//     console.log(contador)
// }


// let numeros = [1, 2, 3, 4]
// for (let contador = 0; contador < numeros.length; contador++) {
//     console.log(numeros[contador])
// }


// ----- For Of ----- pega os valores (normalemente utilizado com Arrays)
// let numeros = [1, 2, 3, 4]
// for (const numero of numeros) {
//     console.log(numero)
//     if (numero == 2) {
//         console.log('passou no 2')
//     }
// }



// ----- For In ----- pega as propriedades (normalemente utilizado com Objetos)
let pessoa = {
    nome: 'João Silva',
    idade: 30,
    profissao: 'Programador'
}

for (const propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`)
}