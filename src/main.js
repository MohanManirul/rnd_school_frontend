import { createApp } from 'vue'
import App from './App.vue'
import "./style.css";

import { createPinia } from "pinia";
const pinia = createPinia();

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "boxicons/css/boxicons.min.css";
import 'ionicons-npm/css/ionicons.css';
import 'material-icons/css/material-icons.min.css';
import 'material-icons/css/material-icons.css';
import 'pe7-icon/dist/dist/pe-icon-7-stroke.css';
import 'typicons.font/src/font/typicons.css';
import 'weathericons/css/weather-icons.css'
import '@/assets/css/feather.css'
import '@/assets/css/sticky.css'
import '@/assets/css/tabler-icons.css'
import '@/assets/css/feather.css'
import '@/assets/scss/main.scss';
import router from './router';

const app = createApp(App);

app.use(router).use(pinia).mount("#app"); 