import apiClient from "@/services/apiClient";
import cogoToast from "cogo-toast";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";


export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  //states
  const Useremail = ref("");
  const token = ref(localStorage.getItem("token") || null);
  const isAuthenticated = ref(localStorage.getItem("email") ?? false);

  //actions
  const login = async (email) => {
    try {
      const res = await apiClient.get(`/UserLogin/${email}`);
      console.log(res.data.message);

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
      // server related issue
      console.error(error); // log the error for debugging
      cogoToast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right"
      });
    }
  };

  // verify OTP
  const verifyOTP = async (otp) =>{
      // Check if Useremail is empty or undefined
      
      if (!Useremail.value) {
        cogoToast.error("Email not found. Please login first.", {
          position: "top-right"
        });
        return; // Exit if email is not set
      }
    try {
      const res = await apiClient.post(
        `/VerifyLogin/${Useremail.value}/${otp}`
      );
      console.log(res.data.data.token);
      
      if (res.data.message === 200) {
        localStorage.setItem("email", Useremail.value);
        localStorage.setItem("token", res.data.data.token);
        isAuthenticated.value = Useremail.value;
        cogoToast.success("Login Successfull", {
          position: "top-right"
        });
        router.push("/dashboard");
      } else {
        cogoToast.error( "Failed to verify OTP",
          {
            position: "top-right"
          }
        );
      }
    } catch (error) {
      // log the error for debugging
      cogoToast.error("frontend catch block error", {
        position: "top-right"
      });
    }
  }

  return { token, Useremail, login, verifyOTP };
});