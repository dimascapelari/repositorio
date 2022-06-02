new Vue({
    el: '#app',
    data: {
        proximo: 'PRÓXIMO'
    },
    methods: {
        avancar() {
            this.proximo = window.location.href = '../pages/sobre.html'
            this.proximo = 'PRÓXIMO'
        },

        recuar() {
            window.location.href = '../pages/atendimento1.html'
        }
    }
})