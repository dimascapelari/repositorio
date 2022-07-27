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


// never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if (this.preco <= 0) {
            falha('Preco inválido!')
        }
    }
}
produto.validarProduto()


let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null // any!
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)


// Desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
