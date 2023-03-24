import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import * as bootstrap from 'bootstrap';
import { createPinia } from 'pinia';

const app = createApp(App)
app.config.globalProperties.$bootstrap = bootstrap;
app.use(createPinia()).use(router).mount('#app')
