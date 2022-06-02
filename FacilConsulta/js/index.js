new Vue({
    el: '#app',
    data: {
        proximo: 'PRÓXIMO'
    },
    methods: {
        avancar() {
            this.proximo = window.location.href = './pages/atendimento1.html'
            this.proximo = 'PRÓXIMO'
        }
    }
})