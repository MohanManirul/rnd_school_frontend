import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from "pinia";
const pinia = createPinia();

import "@/assets/bootstrap/css/bootstrap.min.css";
import "@/assets/css/animate.css";
import "@/assets/css/all.min.css";
import "@/assets/css/ionicons.min.css";
import "@/assets/css/style.css";
import "@/assets/css/responsive.css";
import "@/assets/css/slick.css";
import "@/assets/css/slick-theme.css";

import router from './router/router';

const app = createApp(App);

app.use(router).use(pinia).mount("#app");  