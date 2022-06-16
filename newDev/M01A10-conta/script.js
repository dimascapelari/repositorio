
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
        valorHTML.value = ''

    },

    sacar: function () {

        var valor = Number(valorHTML.value)
        if (valor > this.saldo) {
            alert('Saldo Insulficiente!')
        } else {
            this.saldo -= valor
        }
        saidaSaldo.innerHTML = this.saldo
        valorHTML.value = ''

    },

    exibirExtrato: function () { },



}