new Vue({
    el: '#app',
    data: {
        proximo: 'PRÓXIMO'
    },
    methods: {
        avancar() {
            this.proximo = window.location.href = '../pages/atendimento2.html'
            this.proximo = 'PRÓXIMO'
        },

        recuar() {
            window.location.href = '../index.html'
        }
    }

})