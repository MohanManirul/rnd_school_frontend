<script setup>

import { useAuthStore } from '@/store/authStore';
import { ref } from 'vue';

const authStore = useAuthStore()

const email = ref('');


const LoginClick = async() =>{
 
    if(!email.value){
      alert('Please enter email');
      return ;
    }
    const login = await authStore.login(email.value) ;

}

</script>  

<template>
    
  <div class="login_register_wrap section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-md-10">
          <div class="login_wrap">
            <div class="padding_eight_all bg-white">
              <div class="heading_s1">
                <h3>Login</h3>
              </div>
              <form @submit.prevent="LoginClick">
                <div class="form-group mb-3">
                  <input
                    v-model="email"
                    type="email"
                    required
                    class="form-control"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group mb-3">
                  <button
                    type="submit"
                    class="btn btn-fill-out btn-block"
                    name="login"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>