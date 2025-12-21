import HomePage from "@/Pages/HomePage.vue";
import LoginPage from "@/Pages/LoginPage.vue";
import { createRouter, createWebHistory } from "vue-router";




const routes = [
  {
    path      : "/",
    component : HomePage,
    name      : "home"
  },
  {
    path      : "/login",
    component : LoginPage,
    name      : "login"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
 
export default router;
