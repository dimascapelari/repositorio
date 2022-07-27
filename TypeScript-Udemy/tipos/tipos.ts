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