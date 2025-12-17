import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from './../services/axiosClient';
import { useRouter } from "vue-router";
import cogoToast from "cogo-toast";

export const useAuthStore =  defineStore('auth',()=>{
    //state
    const router =useRouter()
    const user = ref(null);
    const token = ref(localStorage.getItem('token') || null) ;
 
    //actions

    //registration
    const register = async (credentials) => {
      try {
        
        const res = await apiClient.post("/register", credentials);
        return ture;
      } catch (error) {
        console.log(error);
      }
    };
    //login
    const login = async (credentials) => {
      try {
        const res = await apiClient.post("/login", credentials);
        token.value = res.data.data.token ;
        localStorage.setItem("token", token.value);
        cogoToast.success('Login Success',{position:'top-right'})
        return true;
      } catch (error) {
        console.log(error);
        
        if(error.response?.data?.errors){
            const errors = error.response.data.errors;
            for(const field in errors ){
                errors[field].forEach((msg)=>{
                  cogoToast.error(msg, { position: "top-right" });
                });
            }
        }
        // invalid credentials
        else if (error.response?.data?.message) {
          cogoToast.error(error.response.data.message, {
            position: "top-right"
           });
        }
        else{
          cogoToast.error('Something went wrong', {
            position: "top-right"
          });
        }
      }
    };

    //logout
     const logout = async (credentials) => {
       try {
         const res = await apiClient.post("/logout", credentials);
         
         return true;
       } catch (error) {
         console.log(error);
       }finally{
        token.value = null;
        localStorage.removeItem("token");
        router.push('login');
       }
     };

    //get User
    return { user, token, login, logout, register };

});