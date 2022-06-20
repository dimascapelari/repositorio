let salario = document.getElementById('salario')
let novoSalario = document.getElementById('novoSalario')
let aumento = document.getElementById('aumento')
let porcentagem = document.getElementById('porcentagem')

function calcular() {

    let salarioAtual = Number(salario.value)

    if (salarioAtual <= 999) {
        salario20 = salarioAtual * 0.20 + salarioAtual
        porcento20 = salario20 - salarioAtual
        novoSalario.innerHTML = `Novo salário = R$ ${salario20.toFixed(2)}`
        aumento.innerHTML = `Aumento = R$ ${porcento20.toFixed(2)}`
        porcentagem.innerHTML = `Porcentagem = 20%`

    } else if (salarioAtual >= 1000 && salarioAtual <= 2999) {
        salario15 = salarioAtual * 0.15 + salarioAtual
        porcento15 = salario15 - salarioAtual
        novoSalario.innerHTML = `Novo salário = R$ ${salario15.toFixed(2)}`
        aumento.innerHTML = `Aumento = R$ ${porcento15.toFixed(2)}`
        porcentagem.innerHTML = `Porcentagem = 15%`

    } else if (salarioAtual >= 3000 && salarioAtual <= 7999) {
        salario10 = salarioAtual * 0.10 + salarioAtual
        porcento10 = salario10 - salarioAtual
        novoSalario.innerHTML = `Novo salário = R$ ${salario10.toFixed(2)}`
        aumento.innerHTML = `Aumento = R$ ${porcento10.toFixed(2)}`
        porcentagem.innerHTML = `Porcentagem = 10%`

    } else if (salarioAtual >= 8000) {
        salario5 = salarioAtual * 0.05 + salarioAtual
        porcento5 = salario5 - salarioAtual
        novoSalario.innerHTML = `Novo salário = R$ ${salario5.toFixed(2)}`
        aumento.innerHTML = `Aumento = R$ ${porcento5.toFixed(2)}`
        porcentagem.innerHTML = `Porcentagem = 5%`
    }
}
