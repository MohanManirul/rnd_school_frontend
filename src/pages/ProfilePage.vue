
<script setup>
import AppLayout from "../components/layout/AppLayout.vue";
import MenuBar from "../components/frontend/MenuBar.vue";
import TopBrands from "../components/frontend/TopBrands.vue";
import Footer from "../components/frontend/Footer.vue";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";
const router = useRouter() ;

const auth = useAuthStore();

const navigateToProfile = () =>{
    router.push('/profile') ;
}

const navigateToOrders = () =>{
    router.push('/orders') ;
}

onBeforeMount(()=>{
    auth.loadProfile() ;
})
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
                <h1>Profile</h1>
                </div>
            </div>
            <div class="col-md-6">
                <ol class="breadcrumb justify-content-md-end">
                <li class="breadcrumb-item">
                    <router-link :to="{ name: 'home' }">Home</router-link>
                </li>
                <li class="breadcrumb-item active">Profile</li>
                </ol>
            </div>
            </div>
        </div>
    </div>

    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
        <!-- loading state v-if="auth.profileLoading"-->
         <!-- <div  class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
                <span>Loading...</span>
            </div>
            <p class="mt-3">Loading Profile...</p>
         </div> -->

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

          <div class="container-fluid mt-4">

            <div class="row">
              <div class="col-md-3 p-2">
                <label class="form-label">Customer Name</label>
                <input v-model="auth.profile.cus_name" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Customer Address</label>
                <input v-model="auth.profile.cus_add" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Customer City</label>
                <input v-model="auth.profile.cus_city" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Customer State</label>
                <input v-model="auth.profile.cus_state" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Customer Post Code</label>
                <input v-model="auth.profile.cus_postcode" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Customer Country</label>
                <input v-model="auth.profile.cus_country" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Customer Phone</label>
                <input v-model="auth.profile.cus_phone" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Customer Fax</label>
                <input v-model="auth.profile.cus_fax" type="text" class="form-control form-control-sm" />
              </div>
            </div>

            <hr />

            <div class="row">
              <div class="col-md-3 p-2">
                <label class="form-label">Shipping Name</label>
                <input v-model="auth.profile.ship_name" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Shipping Address</label>
                <input v-model="auth.profile.ship_add" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Shipping City</label>
                <input v-model="auth.profile.ship_city" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Shipping State</label>
                <input v-model="auth.profile.ship_state" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Shipping Post Code</label>
                <input v-model="auth.profile.ship_postcode" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Shipping Country</label>
                <input v-model="auth.profile.ship_country" type="text" class="form-control form-control-sm" />
              </div>

              <div class="col-md-3 p-2">
                <label class="form-label">Shipping Phone</label>
                <input v-model="auth.profile.ship_phone" type="text" class="form-control form-control-sm" />
              </div>
            </div>

            <hr />

            <div class="row">
              <div class="col-md-3">
                <button 
                    class="btn btn-danger"
                    :disabled="auth.profile.profileSaving"
                    @click="auth.saveProfile()"
                    >
                    <span
                        v-if="auth.profileSaving"
                        class="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                    >

                    </span>

                    Save Change
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <TopBrands />
    <Footer />
  </AppLayout>
</template>
