import apiClient from "@/services/apiClient";
import cogoToast from "cogo-toast";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";


export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  //states
  const Useremail = ref("");
  const token = ref("");
  const isAuthenticated = ref(localStorage.getItem("token") ?? false);
  //actions
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
        `/VerifyLogin/${Useremail.value}/${otp}`,
        {},
        { withCredentials: true }
      );  
      if (res.data.message === 200) {
        localStorage.setItem("token", res?.data?.data?.token);
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

  // logout
const logout = async () => {
  try {
    // 1️⃣ Remove from localStorage
    localStorage.removeItem("email");
    localStorage.removeItem("token");

    // 2️⃣ Reset reactive token value
    token.value = null;

    // 3️⃣ Show success toast
    cogoToast.success("Logout Successful", { position: "top-right" });

    // 4️⃣ Redirect to login
    router.push({ name: "login" });

    return true;
  } catch (error) {
    console.log(error?.message);

    // Show error toast
    cogoToast.error(error?.message || "Logout Failed", {
      position: "top-right"
    });

    return false;
  }
};





  return {
    Useremail,
    login,
    verifyOTP,
    isAuthenticated,
    logout
  };
});