var pessoa = {
    nome: 'dimas',
    idade: 39,
    altura: 1.68,
    peso: 92.5
}

pessoa.nome = 'Dimas'
pessoa.sobrenome = 'Capelari'

pessoa.nomecompleto = function () {
    return this.nome + ' ' + this.sobrenome
}


console.log(pessoa.nomecompleto())

pessoa.correr = function (km) {
    this.peso -= km * 0.05
}

pessoa.correr(5)
pessoa.correr(10)

pessoa.comer = function (g) {
    this.peso += g / 2000
}

pessoa.comer(800)
pessoa.comer(450)

console.log(pessoa)