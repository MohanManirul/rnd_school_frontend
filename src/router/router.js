import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import ProductByCategoryPage from "@/pages/ProductByCategoryPage.vue";
import VerifyPage from "@/pages/VerifyPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import  ProductByBrandPage  from '@/pages/ProductByBrandPage.vue';




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
  },
  {
    path: "/by-brand",
    component: ProductByBrandPage,
    name: "ProductByBrandPage"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
 
export default router;
