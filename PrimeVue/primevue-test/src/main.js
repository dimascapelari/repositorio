import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import CompButton from 'primevue/button'
import InputText from 'primevue/inputtext'
import CompToast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css'           //core css
import 'primeicons/primeicons.css'                     //icons

const app = createApp(App)
app.use(PrimeVue)
app.use(ToastService)

app.component('CompButton', CompButton)
app.component('InputText', InputText)
app.component('CompToast', CompToast)

app.mount('#app')

