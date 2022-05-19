new Vue({
  el: '#app1',
  data: {
    titulo1: 'Teste 1'
  },
  methods: {
    alterar() {
      this.titulo1 += '!!!!'
    }
  }
})

new Vue({
  el: '#app2',
  data: {
    titulo2: 'Teste 2'
  },
  methods: {
    alterar() {
      this.titulo2 += '!!!!'
    }
  }
})