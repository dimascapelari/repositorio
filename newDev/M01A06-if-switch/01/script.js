var nota = 6

if (nota <= 7) {
    console.log('Reprovado')
} else {
    console.log('Aprovado')
}

function status_aluno(nota) {
    if (nota <= 7) {
        return console.log('Reprovado')
    } else {
        return console.log('Aprovado')
    }
}

status_aluno(8)

