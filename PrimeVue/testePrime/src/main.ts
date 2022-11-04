import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router';

const app = createApp(App);

app.use(PrimeVue);
app.use(router).mount('#app')

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css'           //core css
import 'primeicons/primeicons.css' 