
<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import AppLayout from "../components/layout/AppLayout.vue";
import MenuBar from "../components/frontend/MenuBar.vue";
import TopBrands from "../components/frontend/TopBrands.vue";
import Footer from "../components/frontend/Footer.vue";

import { useProductStore } from "@/store/productStore";
const router = useRouter() ;


const navigateToOrders = () =>{
    router.push('/orders') ;    
}

const store = useProductStore();

onMounted(()=> {
    store.loadOrders() ; 
      
});
</script>

<style scoped>
/* Additional styles for the profile page if needed */
</style>


<template>
  <AppLayout>
    <MenuBar />
    <!-- Breadcrumb Section -->
    <div class="breadcrumb_section bg_gray page-title-mini">
        <div class="container">
            <div class="row align-items-center">
            <div class="col-md-6">
                <div class="page-title">
                <h1>Orders</h1>
                </div>
            </div>
            <div class="col-md-6">
                <ol class="breadcrumb justify-content-md-end">
                <li class="breadcrumb-item">
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Orders</li>
                </ol>
            </div>
            </div>
        </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="container mt-5">
    <div class="row">
        <div class="col-12">
        <ul class="nav nav-tabs">
            <li class="nav-item" role="presentation">
              <button
                 @click = "navigateToProfile" 
                 class="nav-link"
                
                 >
                Profile
            </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                 @click = "navigateToOrders" 
                 class="nav-link"
                 :class="{active:$route.path ==='/orders'}"
                 >
                Orders
            </button>
            </li>
          </ul>
        </div>
    </div>
    </div>

    <!-- Orders Content -->
    <div class="mt-5">
    <div class="container">
        <div class="row">
        <div class="col-12 col-md-12 col-lg-12">
            <div class="table-responsive">
            <table class="table">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Payable</th>
                    <th>Shipping</th>
                    <th>Delivery</th>
                    <th>Payment</th>
                    <th>More</th>
                </tr>
                </thead>
                 <!-- Loading -->
                <tbody v-if="store.loading">
                  <tr>
                    <td colspan="6" class="text-center">
                      <div
                        class="spinner-border text-primary"
                        role="status"
                      ></div>
                    </td>
                  </tr>
                </tbody>

                <!-- Empty -->
                <tbody v-else-if="!store.orders.length">
                  <tr>
                    <td colspan="6" class="text-center text-muted">
                      No orders found
                    </td>
                  </tr>
                </tbody>

                <tbody v-else>
             
                    <tr v-for="(order , i ) in store.orders" :key="order.id">
                        <td>{{ i + 1 }}</td>
                        <td>$ {{ order.total }}</td>
                        <td>{{ order.ship_details || "N/A" }}</td>
                        <td>{{ order.delivery_status }}</td>
                        <td>{{ order.payment_status || "N/A" }}</td>
                        <td>
                        <button 
                            class="btn btn-sm btn-outline-primary"
                            @click="store.loadInvoiceProducts(order.id)"
                            >
                            View Products
                        </button>
                        </td>
                    </tr>

                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    </div>


    <TopBrands />
    <Footer />
  </AppLayout>
</template>
