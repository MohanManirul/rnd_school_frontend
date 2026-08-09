<script setup>
import {useAuthStore} from "@/store/authStore";
import { onBeforeMount } from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
const auth = useAuthStore();
const navigateToProfile = () =>{
    router.push('/profile');
}
// const navigateToOrder = () =>{
//     router.push('/profile');
// }

onBeforeMount(()=>{
    auth.loadProfile();
})



</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">

                <ul class="nav nav-tabs">
                    <li class="nav-item" role="presentation">
                        <a href="/profile" class="nav-link active">
                            Profile
                        </a>
                    </li>

                    <li class="nav-item" role="presentation">
                        <a href="/orders" class="nav-link">
                            Orders
                        </a>
                    </li>
                </ul>

                <div class="container-fluid mt-4">

                    <div class="row">
                        <div class="col-md-3 p-2">
                            <label class="form-label">Customer Name</label>
                            <input v-model="auth.profile.cus_name" type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Customer Address</label>
                            <input v-model="auth.profile.cus_add" type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Customer City</label>
                            <input v-model="auth.profile.cus_city" type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Customer State</label>
                            <input v-model="auth.profile.cus_state" type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Customer Post Code</label>
                            <input v-model="auth.profile.cus_postcode"  type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Customer Country</label>
                            <input v-model="auth.profile.cus_country" type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Customer Phone</label>
                            <input  v-model="auth.profile.cus_phone"  type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Customer Fax</label>
                            <input v-model="auth.profile.cus_fax" type="text" class="form-control form-control-sm">
                        </div>
                    </div>

                    <hr>

                    <div class="row">
                        <div class="col-md-3 p-2">
                            <label class="form-label">Shipping Name</label>
                            <input v-model="auth.profile.ship_name" type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Shipping Address</label>
                            <input  v-model="auth.profile.ship_add" type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Shipping City</label>
                            <input  v-model="auth.profile.ship_city" type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Shipping State</label>
                            <input v-model="auth.profile.ship_state" type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Shipping Post Code</label>
                            <input v-model="auth.profile.ship_postcode" type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Shipping Country</label>
                            <input  v-model="auth.profile.ship_country"  type="text" class="form-control form-control-sm">
                        </div>

                        <div class="col-md-3 p-2">
                            <label class="form-label">Shipping Phone</label>
                            <input v-model="auth.profile.ship_phone" type="text" class="form-control form-control-sm">
                        </div>
                    </div>

                    <hr>

                    <div class="row">
                        <div class="col-md-3">
                            <button class="btn btn-danger"
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
</template>

<style scoped>
    
</style>