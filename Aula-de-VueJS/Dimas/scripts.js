new Vue({
  el: '#app',
  data: {
    titulo: 'Consegui!',
    p1: 'teste',
    titulo2: 'teste2',
    link: 'http://google.com.br',
    sauda3: 'oi',
    linkHtml: '<a href="https://www.uol.com.br">UOL</a>',
    contador: 0,
    width: '0',
  },

  computed: {
    resultado() {
      return this.contador >= 5 ?
        'Maior ou igual a 5' : 'Menor que 5'
    }
  },
  watch: {
    contador(novo, antigo) {
      setTimeout(() => {
        this.contador = 0
      }, 2000)
    },
    titulo() {
      setTimeout(() => {
        this.titulo = 'Consegui de novo!'
      }, 2000)
    }
  },
  methods: {
    saudacao() {
      return 'Teste 1 do Methods!'
    },
    saudacao2() {
      return 'Teste 2 do Methods!'
    },
    aumentar() {
      this.contador++
    },
    diminuir() {
      this.contador--
    },
    iniciarProgresso() {
      let valor = 0
      const temporizador = setInterval(() => {
        valor += 5
        this.width = `${valor}%`
        if (valor == 100) clearInterval(temporizador)
      }, 150)
    },
  }
})
