import HomePage from "@/Pages/HomePage.vue";
import LoginPage from "@/Pages/LoginPage.vue";
import ProductByCategoryPage from "@/pages/ProductByCategoryPage.vue";
import VerifyPage from "@/Pages/VerifyPage.vue";
import { createRouter, createWebHistory } from "vue-router";




const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home"
  },

  {
    path: "/login",
    component: LoginPage,
    name: "login"
  },
  {
    path: "/verify",
    component: VerifyPage,
    name: "verify"
  },
  {
    path: "/by-category",
    component: ProductByCategoryPage,
    name: "ProductByCategoryPage"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
 
export default router;
