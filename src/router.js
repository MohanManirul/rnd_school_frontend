import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./src/pages/LoginPage.vue";
import RegistrationPage from "./src/pages/RegistrationPage.vue";
import DashboardPage from "./src/pages/DashboardPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login"
  },
  {
    path: "/register",
    component: RegistrationPage,
    name: "register"
  },
  {
    path: "/dashboard",
    component: DashboardPage,
    name: "dashboard"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
