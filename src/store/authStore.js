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

  return { token, Useremail, login };
});
localStorage.getItem("token") || null;