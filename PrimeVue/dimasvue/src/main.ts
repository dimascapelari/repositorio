import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import ButtonComp from 'primevue/button';
import DataTable from "primevue/datatable";

import CompColumn from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import CompRow from 'primevue/row';                     //optional for row


import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';



const app = createApp(App);
app.use(PrimeVue);
app.component('InputText', InputText);
app.component('ButtonComp', ButtonComp);
app.component('DataTable', DataTable);
app.component('CompColumn', CompColumn);
app.component('ColumnGroup', ColumnGroup);
app.component('CompRow', CompRow);
app.use(router)
app.mount('#app')

