import apiClient from "@/services/axiosClient";
import { ref } from "vue";


export const useAuthStore = defineStore("auth", () => {
  //states
    const token =ref(null) ;
    
  //actions
    const login = async (credential) => {
        try{

            const res    = await apiClient.post("/login", credential);
            token.value  = res.data.data.token ;
            localStorage.setItem("token", token.value );
            return true ;

        }catch(error){
            console.log(error);
            
        }

    };



});
