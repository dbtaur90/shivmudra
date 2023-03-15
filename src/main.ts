import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import * as bootstrap from 'bootstrap';

const app = createApp(App)
app.config.globalProperties.$bootstrap = bootstrap;
app.use(store).use(router).mount('#app')
