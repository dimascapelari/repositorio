
var saidaSaldo = document.getElementById('saldo')
var saidaExtrato = document.getElementById('extrato')
var valorHTML = document.getElementById('valor')


// Objeto --------------------------------
var poupanca = {

    // Propriedades ----------------------------
    saldo: 0,
    movimentacao: [],


    // Métodos ----------------------------
    depositar: function () {

        //var valor = valorHTML.value
        this.saldo += Number(valorHTML.value)
        saidaSaldo.innerHTML = this.saldo
        this.movimentacao.push('Depósito de R$ ' + valorHTML.value)
        valorHTML.value = ''

    },

    sacar: function () {

        var valor = Number(valorHTML.value)
        if (valor > this.saldo) {
            alert('Saldo Insulficiente!')
        } else {
            this.saldo -= valor
            this.movimentacao.push('Saque de R$ ' + valor)
        }
        saidaSaldo.innerHTML = this.saldo
        valorHTML.value = ''

    },

    exibirExtrato: function () {

        saidaExtrato.innerHTML = 'Extrato: <br>'

        for (i = 0; i <= this.movimentacao.length - 1; i++) {

            saidaExtrato.innerHTML += this.movimentacao[i] + '<br>'

            console.log(this.movimentacao)
        }
    },

}