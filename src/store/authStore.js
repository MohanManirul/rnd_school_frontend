import apiClient from "@/services/apiClient";
import cogoToast from "cogo-toast";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();

  // states
  const Useremail = ref("");
  const isAuthenticated = ref(false);
  const loading = ref(false);

  // actions
  const login = async (email) => {
    try {
      const res = await apiClient.get(`/UserLogin/${email}`);

      if (res.data.message === 200) {
        Useremail.value = email;
        localStorage.setItem("email", email);
        cogoToast.success(res.data.data || "OTP sent to your email", {
          position: "top-right"
        });
        router.push("/verify");
      } else {
        cogoToast.error(res.data.data || "OTP sent to your email", {
          position: "top-right"
        });
      }

      return true;
    } catch (error) {
      console.error(error);
      cogoToast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right"
      });
    }
  };

  const verifyOTP = async (otp) => {
    if (!Useremail.value) {
      cogoToast.error("Email not found. Please login first.", {
        position: "top-right"
      });
      return;
    }
    try {
      const res = await apiClient.post(
        `/VerifyLogin/${Useremail.value}/${otp}`);
      console.log(res);
      
      if (res.data.message === 200) {
        isAuthenticated.value = true; // ✅ set logged in
        cogoToast.success("Login Successful", { position: "top-right" });
        router.push("/");
      } else {
        cogoToast.error("Failed to verify OTP", { position: "top-right" });
      }
    } catch (error) {
      cogoToast.error("frontend catch block error", { position: "top-right" });
    }
  };

  // ✅ checkAuth - for page refresh / app load
  // authStore.js
  const checkAuth = async () => {
    loading.value = true;
    try {
      const res = await apiClient.get("/check-auth", { withCredentials: true });
      if (res.data.auth) {
        isAuthenticated.value = true;
        Useremail.value = res.data.user.userEmail; // optional
      } else {
        isAuthenticated.value = false;
        Useremail.value = "";
      }
    } catch (error) {
      isAuthenticated.value = false;
      Useremail.value = "";
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("email");
      isAuthenticated.value = false; // ✅ reset auth
      Useremail.value = "";
      cogoToast.success("Logout Successful", { position: "top-right" });
      router.push({ name: "login" });
      return true;
    } catch (error) {
      console.log(error?.message);
      cogoToast.error(error?.message || "Logout Failed", {
        position: "top-right"
      });
      return false;
    }
  };

  return {
    Useremail,
    isAuthenticated,
    loading,
    login,
    verifyOTP,
    checkAuth,
    logout
  };
});
