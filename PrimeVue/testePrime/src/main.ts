import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router';
// import Carousel from "primevue/carousel";

const app = createApp(App);

app.use(PrimeVue);
app.use(router).mount('#app')
// app.component('Carousel', Carousel)

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'


import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css'           //core css
import 'primeicons/primeicons.css' 