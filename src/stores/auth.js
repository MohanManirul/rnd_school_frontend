import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

import apiClient from "@/services/apiClient";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const token = ref(null);
  const router = useRouter();

const login = async (values) => {
  try {
    const res = await apiClient.post(
      "adminpanel/login-check",
      {
        email: values.email,
        password: values.password
      },
      { withCredentials: true }
    );

    console.log("store-res", res); // debug friendly
    // res.data.data এ token আছে
    user.value = { email: values.email }; // বা API থেকে যদি user info আসে
    return { success: true };
    
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "API login failed!"
    };
  }
};

  // Logout
  const logout = async () => {
   
    try {
    
    const res = await apiClient.post(
      "/adminpanel/log-out"
    );
     
    if (res.data.msg === "success"){
     console.log(res.data.msg,"logout");
     
      router.push("/");
    }
    } catch (e) {
      alert("Something went wrong");
    }
  };


  return { user, token, login, logout };
});
