import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../services/apiClient";
import { useRouter } from "vue-router";
import cogoToast from "cogo-toast";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
 
  // State
  const user = ref(null);
  const token = ref(localStorage.getItem("token") || null);

  //Actions

  //Registration
  const register = async (credentials) => {
    try {
      await apiClient.post("/register", credentials);
      cogoToast.success("Registration Successfull", {
        position: "top-right"
      });
      return true;
    } catch (error) {
      //   validation error
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        for (const field in errors) {
          errors[field].forEach((msg) => {
            cogoToast.error(msg, { position: "top-right" });
          });
        }
      }
      //   Email already Taken
      else if (error.response?.data?.message) {
        cogoToast.error(error.response.data.message, {
          position: "top-right"
        });
      }
      // Server or Network
      else {
        cogoToast.error("Something went wrong", {
          position: "top-right"
        });
      }
      return false;
    }
  };

  //Login
  const login = async (credentials) => {
    try {
      const res = await apiClient.post("/login", credentials);
    
      token.value = res.data.data.token;
      localStorage.setItem("token", token.value);
      cogoToast.success("Login Successfull", { position: "top-right" });
      return true;
    } catch (error) {
      //   validation error
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        for (const field in errors) {
          errors[field].forEach((msg) => {
            cogoToast.error(msg, { position: "top-right" });
          });
        }
      }
      //   Invalid Credentials
      else if (error.response?.data?.message) {
        cogoToast.error(error.response.data.message, {
          position: "top-right"
        });
      }
      // Server or Network
      else {
        cogoToast.error("Something went wrong", {
          position: "top-right"
        });
      }
    }
  };

  // Logout
  const logout = async () => {
    try {
      const success = await apiClient.post("/logout");
      token.value = null;
      localStorage.removeItem("token");
      cogoToast.success("Logout Successfull", { position: "top-right" });

      if (success) {
        router.push({ name: "login" });
      }

      return true;
    } catch (error) {
      if (error?.message) {
        cogoToast.error(error.message, {
          position: "top-right"
        });
      }
      return false;
    }
  };

  // Get User
  return {
    user,
    token,
    register,
    login,
    logout
  };
});
