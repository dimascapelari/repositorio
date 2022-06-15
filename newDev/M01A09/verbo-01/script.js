
var verbo = 'programar'
var radical = verbo.substr(0, verbo.length - 2)
var pessoa = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles']
var terminacao = ['o', 'as', 'a', 'amos', 'ais', 'am']


//console.log(radical)
//console.log(pessoa)
//console.log(terminacao)

//console.log(pessoa[0] + ' ' + radical + terminacao[0])
//console.log(pessoa[1] + ' ' + radical + terminacao[1])
//console.log(pessoa[2] + ' ' + radical + terminacao[2])
//console.log(pessoa[3] + ' ' + radical + terminacao[3])
//console.log(pessoa[4] + ' ' + radical + terminacao[4])
//console.log(pessoa[5] + ' ' + radical + terminacao[5])

for (i = 0; i <= 5; i++) {
    console.log(pessoa[i] + ' ' + radical + terminacao[i] + ' em JavaScript')
}