// string
let nome: string = 'Dimas'
console.log(nome)
// nome = 28

// numbers
let idade: number = 27
// idade = 'Dimas'
idade = 27.5
console.log(idade)

// booblean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 40
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 40'

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tuplas
let endereco: [string, number] = ["Av Principal", 90]
console.log(endereco)
let endereco2: [string, number, string] = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 1
    Azul = 10,  // 2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// funções
function retornaMeuNome(): string {
    // return minhaIdade
    return nome
}
console.log(retornaMeuNome())


function digaOi(): void {
    console.log('Oi')
    // return minhaIdade
}
digaOi()


function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9))



// Tipo Função
let calculo: (x: number, y: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5, 6))


// objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}
console.log(usuario)

// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    idade: 31,
    nome: 'Maria'
}
console.log(usuario)

// Desafio
/*
    Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto que recebe a hora (número)
      e retorna uma string
       -> Ponto normal (<= 8)
       -> Fora do horário (> 8)
*/


// ----- Minha resposta -----
/*
let funcionario: { nome1: string, nome2: string, nome3: string } = {
    nome1: 'João',
    nome2: 'José',
    nome3: 'Maria'
}

function baterPonto(hora: number) {
    if (hora <= 8) {
        return "Ponto normal"
    } else if (hora > 8) {
        return "Fora do horário"
    }
}
console.log(baterPonto(9))
*/
// ----- ----- ----- -----

// let funcionario: {
//     supervisores: string[],
//     baterPonto: (horas: number) => string
// } = {
//     supervisores: ['Ana', 'Fernando'],
//     baterPonto(horario: number): string {
//         if (horario <= 8) {
//             return 'Ponto normal'
//         } else {
//             return 'Fora do horário!'
//         }
//     }
// }

// console.log(funcionario.supervisores)
// console.log(funcionario.baterPonto(8))
// console.log(funcionario.baterPonto(9))


// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
}


let funcionario2: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))


// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)


// Checando tipos
let valor = 30

if (typeof valor === "number") {
    console.log("É um number!")
} else {
    console.log(typeof valor)
}