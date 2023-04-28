import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import * as bootstrap from 'bootstrap';
import { createPinia } from 'pinia';

const app = createApp(App)
app.config.globalProperties.$bootstrap = bootstrap;
app.use(createPinia().use(piniaPluginPersistedState)).use(router).mount('#app')
