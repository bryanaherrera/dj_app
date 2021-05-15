import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
//import router from './router'


const app = createApp(App).use(router);

app.use(router);

app.mount('#app')
