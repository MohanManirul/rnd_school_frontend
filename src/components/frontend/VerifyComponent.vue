
<script setup>
import { useAuthStore } from '@/store/authStore';
import cogoToast from 'cogo-toast';
import { ref } from 'vue';
const authStore = useAuthStore();
const code = ref('') ;

const verifyLogin = async() =>{
    if(!code.value){
       cogoToast.error("Please enter OTP",
          {
            position: "top-right"
          }
        );
        return ;
    } 
    await authStore.verifyOTP(code.value) ;
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
                <h3>Verification</h3>
              </div>
              <form @submit.prevent="verifyLogin">
                <div class="form-group mb-3">
                  <input
                    v-model="code"
                    type="text"
                    required
                    class="form-control"
                    name="code"
                    placeholder="Verification Code"
                  />
                </div>
                <div class="form-group mb-3">
                  <button
                    type="submit"
                    class="btn btn-fill-out btn-block"
                    name="verify"
                  >
                    Confirm
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
