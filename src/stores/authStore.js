import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from './../services/axiosClient';

export const useAuthStore =  defineStore('auth',()=>{
    //state
    const user = ref(null);
    const token = ref(localStorage.getItem('token') || null) ;
 
    //actions

    //registration
    const register = async (credentials) => {
      try {
        
        const res = await apiClient.post("/register", credentials);
        console.log(credentials);
        
        return ture;
      } catch (error) {
        console.log(error);
      }
    };
    //login

    //logout

    //get User
    return { user,token, register };
});