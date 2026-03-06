
<script setup>
import AppLayout from "../components/layout/AppLayout.vue";
import MenuBar from "../components/frontend/MenuBar.vue";
import TopBrands from "../components/frontend/TopBrands.vue";
import Footer from "../components/frontend/Footer.vue";

import { useAuthStore } from "@/store/authStore";
import { useRouter } from "vue-router";
const router = useRouter() ;

const auth = useAuthStore();

const navigateToProfile = () =>{
    router.push('/profile') ;
}

const navigateToOrders = () =>{
    router.push('/orders') ;
}

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
                 :class="{active:$route.path ==='/profile'}"
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
                <tbody>
                <!-- Example static row -->
                <tr>
                    <td>1</td>
                    <td>$ 120</td>
                    <td>Dhaka</td>
                    <td>Pending</td>
                    <td>Paid</td>
                    <td>
                    <button class="btn btn-sm btn-outline-primary">
                        View Products
                    </button>
                    </td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>$ 250</td>
                    <td>Chittagong</td>
                    <td>Delivered</td>
                    <td>Cash</td>
                    <td>
                    <button class="btn btn-sm btn-outline-primary">
                        View Products
                    </button>
                    </td>
                </tr>

                <!-- If no orders -->
                <!--
                <tr>
                    <td colspan="6" class="text-center text-muted">
                    No orders found
                    </td>
                </tr>
                -->
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
