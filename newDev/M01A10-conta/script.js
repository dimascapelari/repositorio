
var saidaSaldo = document.getElementById('saldo')
var saidaExtrato = document.getElementById('extrato')
var valorHTML = document.getElementById('valor')

function dataCurta() {
    var data = new Date()
    var d = data.getDate()
    var m = data.getMonth() + 1
    var a = data.getFullYear()
    var h = data.getHours()
    var mi = data.getMinutes()

    if (d <= 9) {
        d = "0" + d;
    }

    if (m <= 9) {
        m = "0" + m;
    }

    if (h <= 9) {
        h = "0" + h;
    }

    if (mi <= 9) {
        mi = "0" + mi;
    }

    return d + "/" + m + "/" + a + " - " + h + ":" + mi;


}


// Objeto --------------------------------
var poupanca = {

    // Propriedades ----------------------------
    saldo: 0,
    movimentacao: [],


    // Métodos ----------------------------
    depositar: function () {

        var valor = Number(valorHTML.value)
        this.saldo += valor
        saidaSaldo.innerHTML = 'R$ ' + this.saldo.toFixed(2)
        this.movimentacao.push(dataCurta() + ' - DEP - R$ ' + valor.toFixed(2))
        valorHTML.value = ''

    },

    sacar: function () {

        var valor = Number(valorHTML.value)
        if (valor > this.saldo) {
            alert('Saldo Insulficiente!')
        } else {
            this.saldo -= valor
            this.movimentacao.push(dataCurta() + ' - SAQ - R$ ' + valor.toFixed(2))
        }
        saidaSaldo.innerHTML = 'R$ ' + this.saldo.toFixed(2)
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