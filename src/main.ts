import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import * as bootstrap from 'bootstrap';
import { createPinia } from 'pinia';
import { initializeApp } from "firebase/app";
import 'firebase/messaging';
const firebaseConfig = {
  apiKey: "AIzaSyAmqVtP7gxjFmvtIpqGmorGgvJcB_RMrWw",
  authDomain: "shivmudra-81afc.firebaseapp.com",
  projectId: "shivmudra-81afc",
  storageBucket: "shivmudra-81afc.appspot.com",
  messagingSenderId: "440071771546",
  appId: "1:440071771546:web:d06a9d102d8a1c9a81d623",
  measurementId: "G-2BG8HFCNKJ"
}
initializeApp(firebaseConfig);
const app = createApp(App)
app.config.globalProperties.$bootstrap = bootstrap;
app.use(createPinia().use(piniaPluginPersistedState)).use(router).mount('#app')
