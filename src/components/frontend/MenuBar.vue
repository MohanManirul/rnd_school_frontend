<script setup>
import apiClient from "@/services/apiClient";
import { useAuthStore } from "@/store/authStore";
import { useProductStore } from "@/store/productStore";
import { computed, onMounted, ref } from "vue";
import { RouterLink , useRouter } from "vue-router";
import axios from "axios";
import cogoToast from "cogo-toast";
const productStore = useProductStore();
const categories = ref([]);
const isAuthenticated = ref(false);
const Useremail = ref("");
const router = useRouter();
 
onMounted(async () => {
  categories.value = await productStore.fetchCategories();
  
});

onMounted(() => {
  checkAuth(); // ✅ app load এ cookie check করে logged-in set করবে
});


 
 const checkAuth = async () => {
   
    try {
      const res = await apiClient.get("/check-auth" );
      console.log(res.data);
      if (res.data.auth) {
        isAuthenticated.value = true;
        
      } else {
        isAuthenticated.value = false;
         }
    } catch (error) {
      isAuthenticated.value = false;
    
    }
  };
   

  const logout = async () => {
    try {
      const res = await apiClient.get("/UserLogout");
      localStorage.removeItem("email");
      isAuthenticated.value = false; // ✅ reset auth
      Useremail.value = "";
      cogoToast.success("Logout Successful", { position: "top-right" });
      router.push({ name: "login" });
      return true;
    } catch (error) {
      console.log(error?.message);
      cogoToast.error(error?.message || "Logout Failed", {
        position: "top-right"
      });
      return false;
    }
  };

</script>

<template>
  <div>
    {{ isAuthenticated ? "yes" : "no" }}
  </div>
  <header class="header_wrap fixed-top header_with_topbar">
    <div class="top-header">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div
              class="d-flex align-items-center justify-content-center justify-content-md-start"
            >
              <div class="lng_dropdown me-2">
                <select name="countries" class="custome_select">
                  <option value="en" data-title="English">English</option>
                  <option value="fn" data-title="France">France</option>
                  <option value="us" data-title="United States">
                    United States
                  </option>
                </select>
              </div>
              <div class="me-3">
                <select name="countries" class="custome_select">
                  <option value="USD" data-title="USD">USD</option>
                  <option value="EUR" data-title="EUR">EUR</option>
                  <option value="GBR" data-title="GBR">GBR</option>
                </select>
              </div>
              <ul class="contact_detail text-center text-lg-start">
                <li><i class="ti-mobile"></i><span>123-456-7890</span></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-center text-md-end">
              <ul class="header_list">
                <li>
                  <a href="wishlist.html"
                    ><i class="ti-heart"></i><span>Wishlist</span></a
                  >
                </li>

                <li v-if="isAuthenticated">
                  <i class="ti-user"></i>
                  <button
                    @click="logout"
                    class="btn btn-sm btn-danger"
                  >
                    Logout
                  </button>
                </li>

                <li v-else>
                  <RouterLink :to="{ name: 'login' }"
                    ><i class="ti-user"></i
                    ><span
                      ><button class="btn btn-sm btn-danger">
                        Login
                      </button></span
                    ></RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_header dark_skin main_menu_uppercase">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="index.html"> Logo</a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-expanded="false"
          >
            <span class="ion-android-menu"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="dropdown">
                <RouterLink class="nav-link active" :to="{ name: 'home' }"
                  >Home</RouterLink
                >
              </li>
              <li class="dropdown">
                <a
                  class="dropdown-toggle nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                  >Products</a
                >
             
                <div class="dropdown-menu">
                  <ul>
                    <li v-for="category in categories" :key="category.id">
                      <router-link 
                        class="dropdown-item nav-link nav_item"
                        :to='`/by-category?id=${category.id}`'
                        >{{ category.categoryName }}</router-link
                      >
                    </li>
                    <!-- Add more categories here if needed -->
                  </ul>
                </div>
              </li>
              <li>
                <a href="cart.html" class="nav-link">Cart</a>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav attr-nav align-items-center">
            <li>
              <a href="javascript:;" class="nav-link search_trigger"
                ><i class="linearicons-magnifier"></i
              ></a>
              <div class="search_wrap">
                <span class="close-search"
                  ><i class="ion-ios-close-empty"></i
                ></span>
                <form>
                  <input
                    type="text"
                    placeholder="Search"
                    class="form-control"
                    id="search_input"
                  />
                  <button type="submit" class="search_icon">
                    <i class="ion-ios-search-strong"></i>
                  </button>
                </form>
              </div>
              <div class="search_overlay"></div>
            </li>
            <li class="dropdown cart_dropdown">
              <a
                class="nav-link cart_trigger"
                href="#"
                data-bs-toggle="dropdown"
                ><i class="linearicons-cart"></i
                ><span class="cart_count">2</span></a
              >
              <div class="cart_box dropdown-menu dropdown-menu-right">
                <ul class="cart_list">
                  <li>
                    <a href="#" class="item_remove"
                      ><i class="ion-close"></i
                    ></a>
                    <a href="#">Variable product 001</a>
                    <span class="cart_quantity">
                      1 x
                      <span class="cart_amount">
                        <span class="price_symbole">$</span></span
                      >78.00</span
                    >
                  </li>
                  <li>
                    <a href="#" class="item_remove"
                      ><i class="ion-close"></i
                    ></a>
                    <a href="#">Ornare sed consequat</a>
                    <span class="cart_quantity">
                      1 x
                      <span class="cart_amount">
                        <span class="price_symbole">$</span></span
                      >81.00</span
                    >
                  </li>
                </ul>
                <div class="cart_footer">
                  <p class="cart_total">
                    <strong>Subtotal:</strong>
                    <span class="cart_price">
                      <span class="price_symbole">$</span></span
                    >159.00
                  </p>
                  <p class="cart_buttons">
                    <a
                      href="cart.html"
                      class="btn btn-fill-line rounded-0 view-cart"
                      >View Cart</a
                    >
                    <a href="#" class="btn btn-fill-out rounded-0 checkout"
                      >Checkout</a
                    >
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
