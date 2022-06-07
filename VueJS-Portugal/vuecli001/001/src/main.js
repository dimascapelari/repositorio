import Vue from 'vue'
import App from './App.vue'
import EstadoServidor from './components/EstadoServidor.vue'

Vue.config.productionTip = false

Vue.component('estado-servidor', EstadoServidor)


new Vue({
  render: h => h(App),
}).$mount('#app')